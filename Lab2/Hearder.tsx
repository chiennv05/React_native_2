import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { UserType } from "./Main";

type HeaderType = {
  user: UserType;
};

export default function Hearder(props: HeaderType) {
  const { user } = props;
  console.log(user.name);
  return (
    <View
      style={{
        height: 100,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Image source={{ uri: user.avatar }} style={{ width: 50, height: 50 }} />
      <View style={{ marginLeft: 10, justifyContent: "center" }}>
        <Text>Hello</Text>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{user.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
