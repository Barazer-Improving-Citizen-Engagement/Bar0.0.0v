import { StyleSheet, Text, TouchableHighlight, TouchableHighlightComponent, View } from 'react-native'
import React from 'react'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
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
      <TouchableWithoutFeedback>
        <Link href={'#'}>Learn more</Link>
      </TouchableWithoutFeedback>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    marginRight: 10
    
  },
  detailCard: {
    borderBlockColor: 'orange',
    borderRadius: 7,
    opacity: 0.7,
    textAlign: 'justify'
  }
})
///adding more infor to the infor card