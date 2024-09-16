import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Redirect, router} from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants'
import CustomButton from '../components/Button';
import { StatusBar } from 'expo-status-bar';

const Landing = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{height: '100%'}}>

      <View style={styles.logoView}></View>
      
      {/* Progress Bar */}
      <LinearGradient
        colors={['#1A1E58', '#F4F4F4']}
        start={[0.0, 0.5]}
        end={[1.0, 0.5]}
        style={styles.progressBar}
      />

      {/* Logo */}
      <Image
        // source={images.logo} // Replace with your actual logo URL or import local image
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Text */}
      <View style={styles.landingText}>
      <Text style={styles.title}>Welcome to Barazer.</Text>
      <Text style={styles.subtitle}>
        Get what you deserve, What you need all in one platform. We are the people, Your role is invaluable
      </Text>
      </View>
      
<View >
      {/* Button */}
      <CustomButton 
      title='Continue with Email'
      handlePress={()=> router.push('/home')}
      />
      {/* <TouchableOpacity 
      // style={styles.button} 
      // handlePress={() => router.push('/auth')}
      >
        <Link href="/home" style={styles.buttonText}>Get started</Link>
        <Text style={styles.buttonText} >GET STARTED</Text>
      </TouchableOpacity> */}
      </View>
      </ScrollView>
      <StatusBar backgroundColor='#161622'
      style='dark'/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4F4',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoView:{
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    paddingHorizontal: 4,
    
  },
  landingText:{
    position: 'relative',
    marginTop: 5
  },

  progressBar: {
    height: 5,
    width: '70%',
    borderRadius: 3,
    marginTop: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#161622',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#161622',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  button: {
     marginTop: 4
  },
  buttonText: {
    color: '#FFA001',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  skipContainer: {
    marginBottom: 20,
  },
  skipButton: {
    backgroundColor: '#333',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
  },
  skipText: {
    color: '#FFF',
    fontSize: 16,
  },
  gradientContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gradient: {
    borderRadius: 20,
    height: 200,
    width: '100%',
    opacity: 0.7,
  }, 
});

export default Landing;
