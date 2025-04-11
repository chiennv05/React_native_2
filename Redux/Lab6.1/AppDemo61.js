//tạo cuôi cùng

import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import Store from "./Store";
import ViewApp from "./ViewApp";

const AppDemo61 = () => {
  return (
    <Provider store={Store}>
      <ViewApp />
    </Provider>
  );
};

export default AppDemo61;

const styles = StyleSheet.create({});
