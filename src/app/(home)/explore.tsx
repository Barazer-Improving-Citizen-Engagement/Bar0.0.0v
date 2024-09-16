// home/explore.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../../components/Header';
import CustomButton from '../../components/Button';
import { useRouter } from 'expo-router';

export default function Explore() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header title="Explore Topics" />
      <View style={styles.section}>
        <Text style={styles.text}>
          Discover various topics and discussions related to transparency, service delivery, and
          citizen engagement.
        </Text>
        <CustomButton title="Join Discussion" onPress={() => router.push('/kamukunji')} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#f8f9fa' },
  section: { padding: 20, backgroundColor: '#fff', borderRadius: 8, marginVertical: 10 },
  text: { fontSize: 18, lineHeight: 28, marginBottom: 20 },
});
