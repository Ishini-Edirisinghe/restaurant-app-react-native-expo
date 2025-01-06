import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import { Link, Stack, useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import React, { useState } from "react";
import { Image } from 'expo-image';
const PlaceholderImage = require('@/assets/images/order.png');


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();  // Hook to handle navigation

  const handleLogin = () => {
    if (email && password) {
      // You can add authentication logic here

      // Navigate to the index page after successful login
      router.push('/');
    } else {
      alert('Please enter both email and password');
    }
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Login' }} />
      <ThemedView style={[styles.container, { backgroundColor: 'white' }]}>
        <ThemedText type="title" style={styles.title}>Welcome</ThemedText>

        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          placeholderTextColor="#555" 
        />

        <TextInput
          style={styles.input}
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholderTextColor="#555" 
        />

         {/* Custom styled login button */}
         <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>


        {/* <Link href="/(drawer)/(tabs)" style={styles.link}>
          <ThemedText type="link">Go to home screen!</ThemedText>
        </Link> */}
         <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    color:"black"
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  title:{
    color:"#FFB800",
    top:0,
    marginBottom:130
  },
  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#FFB800',  // Yellow background
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'black',  // Black text color
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
   marginTop:20
  },
   image: {
    width: 220,
    height: 240,
    borderRadius: 18,
  },
});
