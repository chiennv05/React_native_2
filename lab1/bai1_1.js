import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import Header from "./bai1"; // Đảm bảo đường dẫn đúng với file chứa Header component

export default function bai1_1() {
  const renderLeft = () => {
    return (
      <TouchableOpacity onPress={() => alert("Menu clicked")}>
        <Text style={styles.text}>☰</Text>
      </TouchableOpacity>
    );
  };

  const renderCenter = () => {
    return <Text style={styles.text}>Home</Text>;
  };

  const renderRight = () => {
    return (
      <TouchableOpacity onPress={() => alert("Profile Clicked")}>
        <Text style={styles.text}>👤</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        renderLeft={renderLeft}
        renderCenter={renderCenter}
        renderRight={renderRight}
      />
      <View style={styles.content}>
        <Text>Nội dung chính ở đây</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  content: { flex: 1, alignItems: "center", justifyContent: "center" },
  text: { fontSize: 24, color: "#fff" },
  title: { fontSize: 18, fontWeight: "bold", color: "#fff" },
});
