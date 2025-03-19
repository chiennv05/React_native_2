import { StyleSheet, Text, View } from "react-native";
import React from "react";
type FooterType = {
  timeUpdate: string;
  backgroundColor: string;
};
export default function Footer(props: FooterType) {
  const { timeUpdate, backgroundColor } = props;
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        height: 100,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "black", fontSize: 20, fontWeight: "bold" }}>
        Thời gian cập nhật thông tin {timeUpdate}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
