import { Text, View, StyleSheet } from "react-native";
import { useLocalSearchParams } from 'expo-router'; // Use this hook instead of useRouter

export default function Restaurant() {
  // Use useLocalSearchParams to access the parameters
  const { name } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.text}>Restaurant name: {name}</Text>
      </View>
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
  },
});
