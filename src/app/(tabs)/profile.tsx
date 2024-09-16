// profile/index.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Header';
import CustomButton from '../../components/Button';
import Footer from '../../components/Footer';

export default function Profile() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header title="Profile Settings" />
      <View style={styles.section}>
        <Text style={styles.label}>Name:</Text>
        <Text style={styles.value}>John Doe</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>johndoe@example.com</Text>
      </View>
      <CustomButton title="Edit Profile" onPress={() => alert('Edit Profile')} />
      <Footer />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#f8f9fa' },
  section: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 20 },
  label: { fontSize: 18, fontWeight: 'bold' },
  value: { fontSize: 16, color: '#6c757d' },
});
