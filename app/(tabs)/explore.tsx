import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import { ScrollView } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function Explore() {
  return (
    <ScrollView>
      <ThemedText>Explore</ThemedText>
    </ScrollView>

  )
}

const styles = StyleSheet.create({

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  
});
