import { Text, View, StyleSheet } from "react-native";
import { useLocalSearchParams } from 'expo-router'; // Use this hook instead of useRouter
import { Image } from 'expo-image';
export default function Restaurant() {
  // Use useLocalSearchParams to access the parameters
  const { name } = useLocalSearchParams();
  const Foodimg = require("@/assets/images/burger.png");

  return (
    <View style={styles.container}>
    
      <View style={styles.subContainer}>
        <Text style={styles.text}>Restaurant name: {name}</Text>
      </View>
      <Image
          source={Foodimg}
          style={[styles.image, { marginLeft: 10 }]} // Adds space between text and image
          resizeMode="contain"
        />
          <Image
          source={{ uri: 'https://plus.unsplash.com/premium_photo-1672363353897-ae5a81a1ab57?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8' }}
          style={[styles.image, { marginLeft: 10 }]} // Adds space between text and image
          resizeMode="contain"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 25,
    padding: 4,
    textAlign: 'center',
  },
  subContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 4,
    borderColor: 'white',
    backgroundColor: '#AA336A',
  },  image: {
    width: 150, // Set the width of the image
    height: 240, // Set the height of the image
    marginRight: 10, // Add space between image and text
    marginLeft: 0,
    borderRadius: 10,
    // Optional: for rounded corners
  },
});
