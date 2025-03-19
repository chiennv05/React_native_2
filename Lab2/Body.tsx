import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";
import React, { useState } from "react";
import { UserType } from "./Main";

type BodyType = {
  onUpdateInfo: (user: UserType) => void;
  onClickChangeFooter: () => void;
};
export default function Body(props: BodyType) {
  const { onUpdateInfo, onClickChangeFooter } = props;
  const [name, setName] = useState("");
  const [avatar, setAvater] = useState("");
  const handleUpdate = () => {
    if (name.length > 0 && avatar.length > 0) {
      onUpdateInfo({ name: name, avatar: avatar });
    } else {
      ToastAndroid.show("Không đc bỏ trống", ToastAndroid.SHORT);
    }
  };
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <TextInput
        style={styles.styleInput}
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.styleInput}
        placeholder="Enter your avatar"
        value={avatar}
        onChangeText={setAvater}
      />

      <Button title="Update Info" onPress={handleUpdate} />
      <Button title="Change Footer" onPress={onClickChangeFooter} />
    </View>
  );
}

const styles = StyleSheet.create({
  styleInput: {
    borderColor: "gray",
    borderWidth: 1,
    width: "90%",
    borderRadius: 10,
    marginVertical: 10,
  },
});
