import { Text, View, StyleSheet, Button } from "react-native";
import Greet from "@/components/Greet";
import Counter from "@/components/Statepractice";
import { PracticeProvider, PracticeContext } from "@/Global/PracticeContext";
import { useContext } from "react";
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Notification() {
  const context = useContext(PracticeContext);

  if (!context) {
    throw new Error(
      "SomeChildComponent must be used within a PracticeProvider"
    );
  }

  const { val, setVal, val1, setVal1, val2, setVal2 } = context;
  return (
    //SafeAreaView 
    <SafeAreaView  style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.text}>No notification yet</Text>
        <Greet name="John" />
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.text}>{val}</Text>
        <Text style={styles.text}>{val1}</Text>
        <Text style={styles.text}>{val2}</Text>
        <Button
          title="Increase"
          onPress={() => {
            setVal(val + 1);
            setVal1(val1 + 1);
            setVal2(val2 + 1);
          }}
        ></Button>
      </View>
      <Counter />
    </SafeAreaView>
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
    textAlign: "center",
  },

  subContainer: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 4,
    borderColor: "white",
    backgroundColor: "#AA336A",
  },
});
