import { StyleSheet, Text, View } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import Header from "./Hearder";
import Body from "./Body";
import Footer from "./Footer";
const colors = ["white", "gray", "yellow", "red", "blue", "orange"];

export type UserType = {
  name: string;
  avatar: string;
};

export default function index() {
  const [user, setUser] = useState<UserType>({
    name: "Chưa có tên",
    avatar:
      "https://static-00.iconduck.com/assets.00/avatar-default-icon-2048x2048-h6w375ur.png",
  });
  const [lastTimeUpdate, setLastTimeUpdate] = useState(
    "bạn chưa cập nhật thông tin"
  );
  const [footerColor, setFooterColor] = useState(colors[0]);

  //cập nhật thông tin cho tài khoản
  const handleUpdateInfo = useCallback((_user: UserType) => {
    setUser(_user);
  }, []);

  const handleRandomColor = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setFooterColor(colors[randomIndex]);
  }, []);

  //mỗi lần thông tin thay đổi sẽ cập nhật lại thời gian sửa đổi
  useEffect(() => {
    const currendate = new Date();
    const datatime =
      currendate.getDate() +
      "/" +
      (currendate.getMonth() + 1) +
      "/" +
      currendate.getFullYear() +
      " " +
      currendate.getHours() +
      ":" +
      currendate.getMinutes() +
      ":" +
      currendate.getSeconds();
    setLastTimeUpdate(datatime);
  }, [user]);
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "space-between",
        flex: 1,
        marginTop: 50,
        marginBottom: 50,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
      }}
    >
      <Header user={user} />
      <Body
        onUpdateInfo={handleUpdateInfo}
        onClickChangeFooter={handleRandomColor}
      />
      <Footer timeUpdate={lastTimeUpdate} backgroundColor={footerColor} />
    </View>
  );
}

const styles = StyleSheet.create({});
