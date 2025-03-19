import React from "react";
import { View, Text, StyleSheet } from "react-native";

const SectionView = ({ title, children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.content}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    padding: 10,
  },
});

export default SectionView;
