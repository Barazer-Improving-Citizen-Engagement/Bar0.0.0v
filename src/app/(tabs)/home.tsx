// home/index.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import Header from '../../components/Header';
import CustomButton from '../../components/Button';
import Footer from '../../components/Footer';
import { useRouter } from 'expo-router';
import DetailedCard from '../../components/DetailedCard';

export default function Home() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Header title="Home & Explore" />
      <View style={styles.section}>
        <Text style={styles.text}>
          Welcome  
        </Text>
        <CustomButton title="Explore More" onPress={() => router.push('/(home)/explore')} />
      </View>
      
    
      {/* <Footer /> */}
      <FlatList
      data={","}
      renderItem={({ item }) => <DetailedCard title={title}/>}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10}}
      columnWrapperStyle= {{ gap: 10 }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#f8f9fa' },
  section: { padding: 20, backgroundColor: '#fff', borderRadius: 8, marginVertical: 10 },
  text: { fontSize: 18, lineHeight: 28, marginBottom: 20 },
});
