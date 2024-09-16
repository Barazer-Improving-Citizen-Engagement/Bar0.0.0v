import { Stack } from "expo-router";
import { useContext, useEffect } from "react";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import 'react-native-reanimated';
import { AuthContext } from "../../context/AuthContext";  // Import the AuthContext
import { ActivityIndicator, View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useColorScheme } from '../../hooks/useColorScheme';

export  default function RootLayout () {
  const authContext = useContext(AuthContext);
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../../assets/fonts/SpaceMono-Regular.ttf'),
  });
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  // Handle missing context case
  if (!authContext) {
    return (
      <View>
        <Text style={styles.authnot}>Error: AuthContext is not available!</Text>
      </View>
    );
  }

  const { isAuthenticated, loading } = authContext;

  // Show loading screen while loading
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#1A1E58" />
      </View>
    );
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme :DefaultTheme }>
    <Stack>
      {/* Navigate to the appropriate stack based on authentication */}
      <Stack.Screen name="index" options={{headerShown: false}}/>
      <Stack.Screen name={isAuthenticated ? "(tabs)" : "auth"} options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{headerShown: false}} />
      <Stack.Screen name="+not-found" />
    </Stack>
    </ThemeProvider>
  );
};

const styles = StyleSheet.create({
  authnot: {
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1A1E58',
    textAlign: 'center',
  },
});

