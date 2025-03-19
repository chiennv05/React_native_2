import { StyleSheet, Text, View } from "react-native";
import React from "react";

const bai1 = ({ renderLeft, renderCenter, renderRight }) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>{renderLeft && renderLeft()}</View>
      <View style={styles.center}>{renderCenter && renderCenter()}</View>
      <View style={styles.right}>{renderRight && renderRight()}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 60,
    paddingHorizontal: 10,
    backgroundColor: "#4CAF50",
    marginTop: 60,
  },
  left: { flex: 1, alignItems: "flex-start" },
  center: { flex: 2, alignItems: "center" },
  right: { flex: 1, alignItems: "flex-end" },
});

export default bai1;
