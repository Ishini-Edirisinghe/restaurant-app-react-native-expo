import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
} from "react-native";
import CharacterList from "@/components/CharacterList";
import { router } from "expo-router";

export default function TabTwoScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <TouchableHighlight underlayColor="yellow"className=""
        style={styles.button}
        onPress={() => router.push("/login")}
      >
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableHighlight>
      <CharacterList/>
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
