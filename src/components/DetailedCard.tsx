import { StyleSheet, Text, TouchableHighlight, TouchableHighlightComponent, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

type DetailedCardProps = {
  title: string;
  description: string;
};

export default function DetailedCard({ title, description }:
DetailedCardProps ){
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.detailCard}>
        <Text>{title}</Text>
      
      </TouchableHighlight>
      <Text>{description}</Text>
      <TouchableHighlight>
        <Link href={'#'}>Learn more</Link>
      </TouchableHighlight>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'auto',
    padding: 6,
    marginRight: 10,
    position: 'relative',
    borderWidth: 1,
    borderRadius: 10,  
    
  },
  detailCard: {
    borderBlockColor: 'orange',
    borderRadius: 7,
    opacity: 0.7,
    textAlign: 'justify'
  }
})
///adding more infor to the infor card