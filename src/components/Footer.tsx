// components/Footer.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2024 Barazer. All rights reserved.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#f8f9fa', alignItems: 'center' },
  text: { fontSize: 12, color: '#6c757d' },
});
