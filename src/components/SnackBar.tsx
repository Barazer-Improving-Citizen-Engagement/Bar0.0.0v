import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Snackbar = ({ message, visible, type }) => {
  if (!visible) return null;

  return (
    <View style={[styles.snackbar, type === 'success' ? styles.success : styles.error]}>
      <Text style={styles.snackbarText}>{message}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  snackbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  success: {
    color: '#orange',
  },
  error: {
    textDecorationColor: 'red'
  },
  snackbarText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Snackbar;
