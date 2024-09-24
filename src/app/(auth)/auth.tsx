import React, { useState } from 'react';
import { checkActiveSession, createUser, deleteSessions, signIn } from '../../../lib/appwrite'
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Pressable,
  TextInput,
  Keyboard,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { AuthProvider } from '../../../context/AuthContext';
import { store } from '../../../context/store';
import { router } from 'expo-router';
import { login, signUp } from '../../../services/auth';
import { reloadAppAsync } from 'expo';
import CustomButton from '../../components/Button';
import Snackbar from '../../components/SnackBar';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarType, setSnackbarType] = useState('error'); 

  const showSnackbar = (message: string, type: 'success' | 'error') => {
    setSnackbarMessage(message);
    setSnackbarType(type);
    setSnackbarVisible(true);
    setTimeout(() => setSnackbarVisible(false), 3000); // Hide after 3 seconds
  };


  const handleError = (error: string, input: string) => {
    setErrors(prevState => ({ ...prevState, [input]: error }));
  };

  const handleAction = async () => {
    try {
      const activeSession = await checkActiveSession();
      if (activeSession) {
        
        await deleteSessions(); // Clear existing sessions
      }
  
      let result;
      if (isSignUp) {
        try{

          result = await createUser(email, password);
          if (result) {
            // setUser(result);
            // console.log('Error', error.message)
            showSnackbar('User created successfully!', 'success');
            router.replace('/home'); // Navigate to home screen
          }
        }
        catch (error: any) {
          console.log('Error', error.message)
          // showSnackbar(error.message || 'Registration failed', 'error');
        }
      } else {
        try{

          result = await signIn(email, password);
          if (result) {
            // setIsLogged(true); // Set login state
            showSnackbar('User signed in successfully!', 'success');
            router.replace('/home'); // Navigate to home screen
          }
        } catch (error: any) {
          console.log('Error', error.message)
        }
      }
    } catch (error: any) {
      console.log('Error', error.message)

      showSnackbar(error.message || 'Authentication failed', 'error');
    }
  };
  

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!email) {
      handleError('Please input email', 'email');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      handleError('Please input a valid email', 'email');
      isValid = false;
    }

    if (!password) {
      handleError('Please input your password', 'password');
      isValid = false;
    }

    if (isValid) handleAction();
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(prevState => !prevState);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

<Snackbar message={snackbarMessage} visible={snackbarVisible} />
      <View style={styles.header}>
        <TouchableOpacity onPress={navigation.goBack}>
          <Text style={styles.backButton}>
            {'<'}
            {/* {'<'} {isSignUp ? 'Sign Up' : 'Login'} */}
          </Text>
        </TouchableOpacity>
        <Image
          source={require('../../../assets/images/icon.jpg')}
          resizeMode="contain"
          style={styles.logo}
        />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.title}>{isSignUp ? 'Create New Account' : 'Login'}</Text>
        
        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            placeholder="Enter your email"
            placeholderTextColor="orange"
            style={styles.input}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          {errors.email && <Text style={styles.errorText}>{errors.email}</Text>}
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.passwordInputContainer}>
            <TextInput
              placeholder="Password"
              placeholderTextColor="orange"
              style={styles.input}
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity onPress={togglePasswordVisibility} style={styles.toggleVisibilityButton}>
              <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="gray" />
            </TouchableOpacity>
          </View>
          {errors.password && <Text style={styles.errorText}>{errors.password}</Text>}
        </View>

       
        <TouchableOpacity style={styles.actionButton} onPress={validate}>
          <Text style={styles.actionButtonText}>{isSignUp ? 'SIGN UP' : 'LOGIN'}</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>Or</Text>
        <Pressable onPress={() => setIsSignUp(!isSignUp)}>
          <Text style={styles.switchText}>
            {isSignUp ? 'Already have an account? Login' : 'Don’t have an account? Sign Up'}
          </Text>
        </Pressable>

        <View style={styles.socialContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="google" size={20} color="#000" style={styles.socialIcon} />
            <Text style={styles.authButtonText}>Sign In With Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const App = () => (
  <Provider store={store}>
    <AuthProvider>
      <AuthPage />
    </AuthProvider>
  </Provider>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    backgroundColor: '#161622',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButton: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  logo: {
    width: 50,
    height: 200,
  },
  formContainer: {
    top: -80,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  inputWrapper: {
    marginHorizontal: 22,
  },
  label: {
    fontSize: 16,
    color: 'gray',
    fontWeight: '500',
    marginVertical: 8,
  },
  input: {
    backgroundColor: '#161622',
    borderRadius: 10,
    borderColor: '#FFA001',
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 15,
    fontSize: 16,
    color: 'orange',
  },
  errorText: {
    marginTop: 7,
    color: 'red',
    fontSize: 12,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleVisibilityButton: {
    position: 'absolute',
    right: 12,
    top: 13,
  },
  actionButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  actionButtonText: {
    color: '#1A1E58',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 16,
  },
  switchText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 12,
  },
  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#13Aff0',
    borderRadius: 10,
    height: 50,
    minWidth: 190,
    justifyContent: 'center',
    marginBottom: 10,
    marginHorizontal: 10,
    marginRight: 0,
  },
  socialIcon: {
    marginRight: 3,
  },
  authButtonText: {
    color: '#000',
    fontSize: 16,
  },
});
function getCurrentUser() {
  throw new Error('Function not implemented.');
}

function setIsLogged(arg0: boolean) {
  throw new Error('Function not implemented.');
}

function setUser(result: void) {
  throw new Error('Function not implemented.');
}

