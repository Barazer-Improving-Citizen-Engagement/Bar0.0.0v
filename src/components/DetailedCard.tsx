import { StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'

type DetailedCardProps = {
  title: Title;
  description: Description;
};

export default function DetailedCard({ title } ) {
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.detailCard}>
        <Text>{title}</Text>
      <Text>{description}</Text>
      </TouchableHighlight>
      
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBlockColor: 'black',
    borderRadius: 7,
  },
  detailCard: {
    opacity: 0.7,
    justifyContent: 'space-evenly',
    textAlign: 'justify'
  }
})
///adding more infor to the infor card