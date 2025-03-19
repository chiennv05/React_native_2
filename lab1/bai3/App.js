import React, { useState } from "react";
import { View, Button, StyleSheet } from "react-native";
import CustomInput from "./CustomInput";

export default function App() {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!text) {
      setError("Trường này không được để trống!");
    } else {
      setError("");
    }
  };

  return (
    <View style={styles.container}>
      {/* Input bình thường */}
      <CustomInput
        label="Tittle"
        value={text}
        onChangeText={setText}
        placeholder="Place holder"
        description="Nhập thông tin hợp lệ."
      />

      {/* Input có lỗi */}
      <CustomInput
        label="Tittle"
        value=""
        placeholder="Place holder"
        error="Trường này không hợp lệ!"
      />

      {/* Nút gửi */}
      <Button title="Gửi" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
});
