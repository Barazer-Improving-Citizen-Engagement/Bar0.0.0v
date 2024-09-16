// components/Button.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CustomButton({ title, handlePress, containerStyles, textStyles, isLoading }: { title: string, onPress: () => void }) {
  return (
    <TouchableOpacity
    activeOpacity={0.7}
    style={styles.button}
     onPress={handlePress}>  
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#161622',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    minHeight: 62,
    justifyContent: 'center',
    position: 'static',
  },
  buttonText: {
    color: '#FFA001',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
