import { Text, View, StyleSheet, Button } from "react-native";
import { PracticeProvider, PracticeContext } from "@/Global/PracticeContext";
import { useContext, useState } from "react";
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AboutScreen() {
  const randomWidth = useSharedValue(10);

  const config = {
    duration: 500,
    easing: Easing.bezier(0.5, 0.01, 0, 1),
  };

  const style = useAnimatedStyle(() => {
    return {
      width: withTiming(randomWidth.value, config),
    };
  });

  const context = useContext(PracticeContext);

  if (!context) {
    throw new Error(
      "SomeChildComponent must be used within a PracticeProvider"
    );
  }

  const { val, setVal, val1, setVal1, val2, setVal2 } = context;

  const [message, setMessage] = useState('Tap me!');

  const handleResponderGrant = () => {
    setMessage('Touch started');
  };

  const handleResponderMove = () => {
    setMessage('Finger moved');
  };

  const handleResponderRelease = () => {
    setMessage('Touch ended');
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={{ fontFamily: "Inter-Black" }}>{val}</Text>
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
      <View style={styles.container}>
        <Animated.View style={[styles.box, style]} />
        <Button
          title="toggle"
          onPress={() => {
            randomWidth.value = Math.random() * 350;
          }}
        />
      </View>
      <View
      style={styles.container}
      onStartShouldSetResponder={() => true}
      onResponderGrant={handleResponderGrant}
      onResponderMove={handleResponderMove}
      onResponderRelease={handleResponderRelease}
    >
      <Text style={styles.text}>{message}</Text>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FBCFCD",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
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

  box: {
    
    width: 100,
    height: 80,
    backgroundColor: "black",
    margin: 30,
  },
});
