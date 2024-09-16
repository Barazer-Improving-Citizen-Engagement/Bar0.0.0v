// components/Header.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header({ title }: { title: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#24294D', alignItems: 'center' },
  title: { fontSize: 24, color: '#fff', fontWeight: 'bold' },
});
