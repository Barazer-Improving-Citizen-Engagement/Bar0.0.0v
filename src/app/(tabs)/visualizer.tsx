// visualizer/index.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { getGovernmentData } from '../../../services/visualizer';

export default function Visualizer() {
  const data = getGovernmentData();

  return (
    <View style={styles.container}>
      <Header title="Data Visualizer" />
      <View style={styles.section}>
        <Text style={styles.label}>Transparency Score: </Text>
        <Text style={styles.value}>{data.transparencyScore}%</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Service Delivery Score: </Text>
        <Text style={styles.value}>{data.serviceDelivery}%</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Citizen Engagement Score: </Text>
        <Text style={styles.value}>{data.citizenEngagement}%</Text>
      </View>
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },
  section: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 20 },
  label: { fontSize: 18, fontWeight: 'bold' },
  value: { fontSize: 24, fontWeight: 'bold', color: '#007bff' },
});
