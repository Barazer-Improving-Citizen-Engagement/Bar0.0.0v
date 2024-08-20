import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Collapsible } from '@/components/Collapsible'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import { Ionicons } from '@expo/vector-icons'

export default function visualiser() {
  return (
    <ScrollView>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
      titleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
      },
})