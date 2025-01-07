import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from "react-native";

import { router } from "expo-router";

export default function TabTwoScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <TouchableOpacity className=""
        style={styles.button}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  button: {
    // width: "100%",
    padding: 15,
    backgroundColor: "#FFB800", // Yellow background
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "black", // Black text color
    fontSize: 16,
    fontWeight: "bold",
  },
});
