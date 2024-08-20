import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { ThemedText } from '@/components/ThemedText'

export default function landing() {
  return (
    <ScrollView>
      <ThemedText type='title'></ThemedText>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})