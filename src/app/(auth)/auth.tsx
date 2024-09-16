import React, { useState } from 'react';
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
import { useDispatch } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import { signUp, login } from '../../../services/auth'; // Adjust the path if needed
import { AuthProvider } from '../../../context/AuthContext';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleError = (error: string, input: string) => {
    setErrors((prevState) => ({ ...prevState, [input]: error }));
  };

  const handleAction = async () => {
    try {
      if (isSignUp) {
        // Sign Up Logic
        await signUp(email, password);
      } else {
        await dispatch(login(email, password));
        navigation.navigate('home', { email });
      }
      navigation.navigate('HomeTabs');
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

  const validate = () => {
    Keyboard.dismiss();
    let isValid = true;

    if (!email) {
      handleError("Please input email", "email");
      isValid = false;
    } else if (!email.match(/\S+@\S+\.\S+/)) {
      handleError("Please input a valid email", "email");
      isValid = false;
    }

    if (!password) {
      handleError("Please input your password", "password");
      isValid = false;
    }

    if (isValid) {
      handleAction();
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>{'<'} {isSignUp ? 'Sign Up' : 'Login'}</Text>
        </TouchableOpacity>
        <Image
          source={require("../../../assets/images/icon.jpg")}
          resizeMode="contain"
          style={{
            width: 350,
            height: 300,
          }}
        />
      </View>

      <View style={{ top: -80 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>{isSignUp ? 'Create New Account' : 'Login to Your Account'}</Text>
          <View style={{ marginHorizontal: 22 }}>
            {/* Email Input */}
            <Text style={styles.label}>Email Address</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Enter your email"
                placeholderTextColor="black"
                style={styles.input}
                keyboardType="email-address"
                value={email}
                onChangeText={(e) => setEmail(e)}
              />
            </View>
            {errors.email && (
              <Text style={styles.errorText}>
                {errors.email}
              </Text>
            )}

            {/* Password Input */}
            <Text style={styles.label}>Password</Text>
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Password"
                placeholderTextColor="black"
                style={styles.input}
                secureTextEntry={!passwordVisible}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity onPress={togglePasswordVisibility} style={styles.toggleVisibilityButton}>
                <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={24} color="gray" />
              </TouchableOpacity>
            </View>
            {errors.password && (
              <Text style={styles.errorText}>
                {errors.password}
              </Text>
            )}

            {/* Sign Up / Login Button */}
            <Pressable style={styles.actionButton} onPress={validate}>
              <Text style={styles.actionButtonText}>{isSignUp ? 'SIGN UP' : 'LOGIN'}</Text>
            </Pressable>

            {/* Switch between Sign Up and Login */}
            <Text style={styles.orText}>Or</Text>
            <Pressable onPress={() => setIsSignUp(!isSignUp)}>
              <Text style={styles.switchText}>
                {isSignUp ? 'Already have an account? Login' : 'Don’t have an account? Sign Up'}
              </Text>
            </Pressable>

            {/* Social Buttons */}
            <View style={styles.socialContainer}>
              <TouchableOpacity style={styles.socialButton}>
                <FontAwesome name="google" size={20} color="#000" style={styles.socialIcon} />
                <Text style={styles.authButtonText}>Sign In With Google</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialButton}>
                <FontAwesome name="twitter" size={20} color="#1DA1F2" style={styles.socialIcon} />
                <Text style={styles.authButtonText}>Sign In With Twitter</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default function App() {
  return (
    <AuthProvider>
      <AuthPage />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#161622',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignContent: 'center',
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
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    color: "black",
    fontWeight: '500',
    marginVertical: 8,
  },
  inputContainer: {
    width: "100%",
    borderColor: "gray",
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 22,
  },
  input: {
    backgroundColor: 'black',
    borderRadius: 10,
    borderColor: '#FFA001',
    height: 50,
    width: "100%",
    paddingHorizontal: 15,
    fontSize: 16,
  },
  errorText: {
    marginTop: 7,
    color: "red",
    fontSize: 12,
  },
  actionButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 13,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  actionButtonText: {
    color: '#1A1E58',
    fontSize: 16,
    fontWeight: 'bold',
  },
  toggleVisibilityButton: {
    position: 'absolute',
    right: 12,
    top: 13,
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
    fontSize: 16,
  },
  socialContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    height: 40,
    minWidth: 220,
    justifyContent: 'center',
    marginBottom: 15,
    marginHorizontal: 10,
  },
  socialIcon: {
    marginRight: 10,
  },
  authButtonText: {
    color: '#000',
    fontSize: 16,
  },
});
