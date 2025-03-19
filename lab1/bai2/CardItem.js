import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const CardItem = ({ data }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>Địa điểm</Text>
      <Text style={styles.text}>{data.location}</Text>

      <Text style={styles.label}>Thời gian</Text>
      <Text style={styles.text}>{data.time}</Text>

      {data.transport && (
        <>
          <Text style={styles.label}>Phương tiện di chuyển</Text>
          <Text style={styles.text}>{data.transport}</Text>
        </>
      )}

      {data.image && (
        <>
          <Text style={styles.label}>Hình ảnh</Text>
          <Image source={{ uri: data.image }} style={styles.image} />
        </>
      )}

      {data.button && (
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>CHI TIẾT</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    marginTop: 5,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 10,
    marginTop: 10,
  },
  button: {
    backgroundColor: "#007BFF",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default CardItem;
