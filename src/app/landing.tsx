import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Landing = () => {
  return (
    <View style={styles.container}>
      
      {/* Progress Bar */}
      <LinearGradient
        colors={['#1A1E58', '#F4F4F4']}
        start={[0.0, 0.5]}
        end={[1.0, 0.5]}
        style={styles.progressBar}
      />

      {/* Logo */}
      <Image
        source={{ uri: 'https://your-logo-url.com/logo.png' }} // Replace with your actual logo URL or import local image
        style={styles.logo}
        resizeMode="contain"
      />

      {/* Text */}
      <Text style={styles.title}>Welcome to Barazer.</Text>
      <Text style={styles.subtitle}>
        Get what you deserve, What you need all in one platform. We are the people, Your role is invaluable
      </Text>

      {/* Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
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
  progressBar: {
    height: 5,
    width: '30%',
    borderRadius: 3,
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
    color: '#1A1E58',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 40,
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#1A1E58',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Landing;
