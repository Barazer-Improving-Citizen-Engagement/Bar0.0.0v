import { StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import type { PropsWithChildren, ReactElement } from 'react'
import Animated, {
    useAnimatedRef, 
    useAnimatedStyle, 
    useScrollViewOffset
} from 'react-native-reanimated'

import { ThemedView } from '../components/ThemedView'
import { ThemedText } from '../components/ThemedText'
import { Link } from 'expo-router'
import DetailedCard from '../components/DetailedCard'

type Props = PropsWithChildren<{
    title: ReactElement;
    description: ReactElement;
    bgColor: { dark: string; light: string};
}>;


export default function InfoCard({
    children,
    title,
    description
}: Props) {
    const colorScheme = useColorScheme()?? 'light';
    const scrollRef = useAnimatedRef<Animated.ScrollView>();
    const scrollOffset = useScrollViewOffset(scrollRef);



    const animatedCard = useAnimatedStyle (() => {
        return {
            next(){}
        }
        // style the card interpolation and stuff like transformation shadow
    })



  return (
    <ThemedView style={styles.container}>
        {children}
        <a href='#'>
        <ThemedText>Learn More</ThemedText>
        </a>
    </ThemedView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        gap: 16,
        borderRadius: 50,
        borderBlockColor: 'light' 
    }
})





///component to display title,a-few-word-description