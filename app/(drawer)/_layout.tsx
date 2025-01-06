import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import { Drawer } from "expo-router/drawer";
import { Feather } from "@expo/vector-icons";
import { usePathname, router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { useColorScheme } from "@/hooks/useColorScheme"; // Adjust this import path as necessary
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";


function CustomDrawerContent(props: any) {
  const pathname = usePathname();

  return (
    <View style={styles.container}>
      <View style={styles.userInfoWrapper}>
        <Image
          source={{ uri: "https://randomuser.me/api/portraits/women/26.jpg" }}
          style={styles.userImg}
        />
        <View style={styles.userDetailsWrapper}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={styles.userEmail}>john@email.com</Text>
        </View>
      </View>

      <TouchableOpacity
        style={[
          styles.navItem,
          { backgroundColor: pathname === "/(drawer)/(tabs)/index" ? "#333" : "#fff" },
        ]}
        onPress={() => router.push("/")}
      >
        <Feather
          name="home"
          size={24}
          color={pathname === "/(drawer)/(tabs)/index" ? "#fff" : "#000"}
        />
        <Text
          style={[
            styles.navItemLabel,
            { color: pathname === "/(drawer)/(tabs)/index" ? "#fff" : "#000" },
          ]}
        >
          Home
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.navItem,
          { backgroundColor: pathname === "/(drawer)/(tabs)/about" ? "#333" : "#fff" },
        ]}
        onPress={() => router.push("/(drawer)/(tabs)/about")}
      >
        <Feather
          name="info"
          size={24}
          color={pathname === "/(drawer)/(tabs)/about" ? "#fff" : "#000"}
        />
        <Text
          style={[
            styles.navItemLabel,
            { color: pathname === "/(drawer)/(tabs)/about" ? "#fff" : "#000" },
          ]}
        >
          About
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.navItem,
          { backgroundColor: pathname === "/(drawer)/(tabs)/settings" ? "#333" : "#fff" },
        ]}
        onPress={() => router.push("/(drawer)/(tabs)/settings")}
      >
        <Feather
          name="settings"
          size={24}
          color={pathname === "/(drawer)/(tabs)/settings" ? "#fff" : "#000"}
        />
        <Text
          style={[
            styles.navItemLabel,
            { color: pathname === "/(drawer)/(tabs)/settings" ? "#fff" : "#000" },
          ]}
        >
          Settings
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default function DrawerRootLayout() {
  const colorScheme = useColorScheme();
  const pathname = usePathname();
  // const [loaded] = useFonts({
  //   SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  // });

 

  // Map paths to header titles
  const headerTitles: Record<string, string> = {
    "/": "Home",
    "/about": "About",
    "/settings": "Settings",
  };

  const currentTitle = headerTitles[pathname] || "Tabs";

  return (
    <ThemeProvider value={colorScheme === "light" ? DarkTheme : DefaultTheme}>
      <Drawer
        drawerContent={(props:any) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerShown: true,
          headerTitle: currentTitle, // Set header title dynamically
          headerRight: () => (
            <TouchableOpacity
              onPress={() => router.push('/notification')} 
              style={{ marginRight: 15 }}
            >
              <Feather name="bell" size={24} color="black" />
            </TouchableOpacity>
          ),
        }}
      >
        {/* Ensure Drawer.Screen components are defined here if needed */}
      </Drawer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  userInfoWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  userImg: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  userDetailsWrapper: {
    marginLeft: 10,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  userEmail: {
    fontSize: 14,
    color: "#555",
  },
  navItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginVertical: 5,
  },
  navItemLabel: {
    marginLeft: 15,
    fontSize: 16,
  },
});
