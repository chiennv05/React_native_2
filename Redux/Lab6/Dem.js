import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { tang, giam } from "./Store"; // import các hàm tăng giảm từ store

const Dem = () => {
  const count = useSelector((state) => state.dem); // lấy giá trị dem từ redux store
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Đếm: {count}</Text>
      <Button title="Tang" onPress={() => dispatch(tang())} />
      <Button title="Giam" onPress={() => dispatch(giam())} />
    </View>
  );
};

export default Dem;

const styles = StyleSheet.create({});
