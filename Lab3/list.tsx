import { StyleSheet, View, ViewToken } from "react-native";
import React from "react";
import Animated, {
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

type ItemType = {
  viewableItems: Animated.SharedValue<ViewToken[]>; // Danh sách item đang hiển thị
  item: {
    id: number;
  };
};

export default function list({ item, viewableItems }: ItemType) {
  const rStyle = useAnimatedStyle(() => {
    // Kiểm tra xem item có trong danh sách hiển thị không
    const isVisible = Boolean(
      viewableItems.value
        .filter((item) => item.isViewable) // Chỉ lấy item đang hiển thị
        .find((viewableItem) => viewableItem.item.id === item.id) // Kiểm tra id có trùng không
    );

    return {
      opacity: withTiming(isVisible ? 1 : 0), // Nếu hiển thị thì opacity = 1, ngược lại = 0
      transform: [
        {
          scale: withTiming(isVisible ? 1 : 0.6), // Nếu hiển thị thì scale = 1, ngược lại = 0.6
        },
      ],
    };
  }, []);

  return (
    <Animated.View
      style={[
        {
          width: "90%",
          height: 80,
          backgroundColor: "#78CAD2",
          marginTop: 20,
          borderRadius: 15,
          alignSelf: "center",
        },
        rStyle, // Áp dụng hiệu ứng animation
      ]}
    ></Animated.View>
  );
}

const styles = StyleSheet.create({});
