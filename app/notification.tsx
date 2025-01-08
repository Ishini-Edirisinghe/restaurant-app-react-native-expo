import { Text, View, StyleSheet } from "react-native";
import Greet from "@/components/Greet";
import Counter from "@/components/Statepractice";

export default function Notification() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
      <Text style={styles.text}>No notification yet</Text>
      <Greet name="John" />
      </View>
      <Counter />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "#FBCFCD",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    // color: "white",
    fontWeight: "bold",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 25,
    padding: 4,
    textAlign: 'center',
  },

  subContainer:{
    paddingVertical: 20,
    paddingHorizontal:10,
    borderWidth: 4,
    borderColor: 'white',
    backgroundColor: '#AA336A',
  },
});
