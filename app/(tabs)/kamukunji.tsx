import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Ionicons } from '@expo/vector-icons'

export default function kamukunji() {
  return (
<ScrollView></ScrollView>
  )
}

const styles = StyleSheet.create({
    headerImage: {
        color: '#808080',
        bottom: -90,
        left: -35,
        position: 'absolute',
      },
      titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
      },
})