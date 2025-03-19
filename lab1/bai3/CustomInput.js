import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Import icon

const CustomInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  description,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      {/* Tiêu đề */}
      <Text style={styles.label}>
        {label} <Text style={styles.required}>*</Text>
      </Text>

      {/* Ô nhập dữ liệu */}
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.focusedInput,
          error && styles.errorInput,
        ]}
      >
        <TextInput
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#999"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        {/* Hiển thị icon lỗi nếu có */}
        {error && <MaterialIcons name="error" size={20} color="red" />}
      </View>

      {/* Hiển thị lỗi nếu có */}
      {error && <Text style={styles.errorText}>{error}</Text>}

      {/* Hiển thị mô tả nếu có */}
      {description && <Text style={styles.description}>{description}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
  },
  required: {
    color: "red",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
  },
  input: {
    flex: 1,
    height: 45,
    fontSize: 16,
    color: "#000",
  },
  focusedInput: {
    borderColor: "#008CFF",
  },
  errorInput: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  description: {
    fontSize: 12,
    color: "#666",
    marginTop: 5,
  },
});

export default CustomInput;
