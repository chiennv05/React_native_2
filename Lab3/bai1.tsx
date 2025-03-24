import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export default function Bai1() {
  const translatesY = useSharedValue<number>(0);
  const [direction, setDirection] = useState(1); // 1: đi xuống, -1: đi lên

  const handlePress = () => {
    translatesY.value += direction * 50;
    setDirection(direction * -1); // Đảo chiều
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateY: withSpring(translatesY.value) }],
  }));

  return (
    <View style={{ flex: 1, alignItems: "center", marginTop: 100 }}>
      <Button title="Click" onPress={handlePress} />
      <Animated.View
        style={[
          { width: 50, height: 50, backgroundColor: "red", borderRadius: 20 },
          animatedStyles,
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
