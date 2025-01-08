import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import '../global.css';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Slot, router } from "expo-router";
import { PracticeProvider } from '@/Global/PracticeContext';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Make sure the user is authenticated before trying to navigate
    const userLoggedIn = false; // Change this to true to simulate logged-in state
    if (loaded && !userLoggedIn) {
      router.replace("/login"); // Navigate only after layout is loaded
    }

    // Hide splash screen when fonts are loaded
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null; // Ensure layout doesn't render before fonts are loaded
  }

  return (
    
    <ThemeProvider value={colorScheme === 'light' ? DarkTheme : DefaultTheme}>
      <PracticeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Slot />
        <Stack.Screen name="+not-found" />
        <Stack.Screen name="notification"
        options={{
          headerShown: true, // Enable header for this screen
          headerTitle: "Notifications",
          // headerStyle: { backgroundColor: "#FBCFCD" }, // Optional styling
          headerTintColor: "black", // Back button and title color
          headerBackTitle: "Back", // Text next to the back button
        }} />
        <Stack.Screen name="restaurant"
        options={{
          headerShown: true, // Enable header for this screen
          headerTitle: "Restaurant",
          // headerStyle: { backgroundColor: "#FBCFCD" }, // Optional styling
          headerTintColor: "black", // Back button and title color
          headerBackTitle: "Back", // Text next to the back button
        }} />

      </Stack>
      <StatusBar style="auto" />
      </PracticeProvider>
    </ThemeProvider>
    
  );
}
