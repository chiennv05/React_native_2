import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { Provider } from "react-redux";
import Store from "./Store";
import Dem from "./Dem";

const App = () => {
  return (
    <Provider store={Store}>
      <Dem />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
