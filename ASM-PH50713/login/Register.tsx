import {
  Image,
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons"; // Thư viện icon

const Register = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <Image
        source={require("../assets/images/imgRegister.png")}
        style={styles.img}
      />
      <View style={styles.container_input}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>Chào mừng bạn</Text>
        <Text style={{ fontSize: 18, marginBottom: 15 }}>
          Đăng nhập tài khoản
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder="Nhập email hoặc số điện thoại"
          secureTextEntry={true}
          onChangeText={(text) => setUserName(text)}
          value={username}
        />

        <TextInput
          style={styles.textInput}
          placeholder="E-mail"
          secureTextEntry={true} // Đổi trạng thái khi bấm icon
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Số điện thoại"
          secureTextEntry={true} // Đổi trạng thái khi bấm icon
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Mật khẩu"
          secureTextEntry={true} // Đổi trạng thái khi bấm icon
          onChangeText={(text) => setPassword(text)}
          value={password}
        />

        <Text style={styles.terms}>
          Để đăng ký tài khoản, bạn đồng ý Terms & Conditions and Privacy Policy
        </Text>

        <TouchableOpacity>
          <Text style={styles.buttonLogin}>Đăng ký</Text>
        </TouchableOpacity>
        <View style={styles.and}>
          <View style={styles.line} />
          <Text style={styles.orText}>Hoặc</Text>
          <View style={styles.line} />
        </View>
        <Image source={require("../assets/images/gg_fb.png")} />
        <View style={styles.addtk}>
          <Text>bạn không có tải khoản?</Text>
          <TouchableOpacity>
            <Text style={styles.addRegister}>Đăng nhập</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  img: {
    width: "100%",
    height: 210,
  },

  container_input: {
    justifyContent: "center",
    alignItems: "center",
    paddingStart: 30,
    paddingEnd: 30,
  },

  textInput: {
    width: 350,
    height: 56,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#fff",
  },
  terms: {
    textAlign: "center", // Căn giữa chữ
    fontSize: 14,
    // Màu chữ
    marginHorizontal: 20, // Cách lề 2 bên cho dễ đọc
  },

  buttonLogin: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 10,
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,

    textAlign: "center",
    marginTop: 20,
    width: 350,
    height: 56,
  },
  and: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#4CAF50", // Màu đường kẻ
  },
  orText: {
    marginHorizontal: 10, // Khoảng cách giữa chữ và đường kẻ
    fontSize: 16,
    fontWeight: "bold",
  },
  addtk: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },

  addRegister: {
    color: "#4CAF50",
    marginStart: 5,
  },
});
