// home/index.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import Header from '../../components/Header';
import CustomButton from '../../components/Button';
import Footer from '../../components/Footer';
import { useRouter } from 'expo-router';
import DetailedCard from '../../components/DetailedCard';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Collapsible } from '../../components/Collapsible';
import { ThemedView } from '../../components/ThemedView';

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView>
      
    <View contentContainerStyle={styles.container}>
      <ScrollView>
      <View style={styles.lists}>
       {/* <View> */}
        <FlatList
      data={[{ id : 1}]}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => <DetailedCard title="title" description="this is a detailed description"/>}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10}}
      columnWrapperStyle= {{ gap: 10 }}
      />
       <FlatList
      data={[{ id : 1}]}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => <DetailedCard title="title" description="this is a detailed description"/>}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10}}
      columnWrapperStyle= {{ gap: 10 }}
      />
       <FlatList
      data={[{ id : 1}]}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => <DetailedCard title="title" description="this is a detailed description"/>}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10}}
      columnWrapperStyle= {{ gap: 10 }}
      />
       <FlatList
      data={[{ id : 1}]}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => <DetailedCard title="title" description="this is a detailed description"/>}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10}}
      columnWrapperStyle= {{ gap: 10 }}
      />
       <FlatList
      data={[{ id : 1}]}
      keyExtractor={(item) => item.$id}
      renderItem={({ item }) => <DetailedCard title="title" description="this is a detailed description"/>}
      numColumns={2}
      contentContainerStyle={{ gap: 10, padding: 10}}
      columnWrapperStyle= {{ gap: 10 }}
      />
 
      {/* <View style={styles.section}>
        <Text style={styles.text}>
          Welcome  
        </Text>
        <CustomButton title="Explore More" onPress={() => router.push('/explore')} />
      </View> */}
      {/* </View> */}
    
    </View>
    <View style={styles.section}>
      <Text style={styles.text} >
        Barazer
      </Text>
      {/* <Text style={styles.filter}>Filter</Text> */}
      <View>
      <Collapsible title='The Parliament'/>
      </View>
      <View>
      <Collapsible title='City County' children="Lorem Ipsum Dom"/>
      </View>
    </View>
    <View style={styles.section}>
      <Text style={styles.text} >
        Governmental Info <Collapsible title={''}/>
      </Text>
      
    </View>
    </ScrollView>
    </View>
    </SafeAreaView>
  );
} 

const styles = StyleSheet.create({
  container: { flexGrow: 1, padding: 20, backgroundColor: '#f8f9fa'},
  section: { padding: 20, backgroundColor: '#fff', borderRadius: 8, marginVertical: 10},
  // filter:{
  // position: 'relative',
  
  // },
  lists:{
    borderColor: 'amber',
    textAlign: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  text: { fontSize: 18, lineHeight: 28, marginBottom: 20 },
});
