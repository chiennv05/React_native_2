import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView, // Thêm ScrollView
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { MaterialIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
  const [productTree, setProductTree] = useState([]);
  const [productPot, setProductPot] = useState([]);

  const apiTree = "http://192.168.31.245:3000/product_tree";
  const apiPot = "http://192.168.31.245:3000/product_pot";

  useEffect(() => {
    console.log("Loading...");
    getList();
  }, []);

  const getList = async () => {
    try {
      const [treeRes, potRes] = await Promise.all([
        axios.get(apiTree),
        axios.get(apiPot),
      ]);

      //   console.log("Dữ liệu cây:", treeRes.data);
      //   console.log("Dữ liệu chậu:", potRes.data);

      setProductTree(treeRes.data);
      setProductPot(potRes.data);
    } catch (error) {
      console.error("Lỗi khi tải dữ liệu", error);
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.status}>{item.status}</Text>
      <Text style={styles.price}>{item.price}đ</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.shopping}>
          <Text style={styles.title}>
            Planta - tỏa sáng {"\n"}
            <Text style={{ fontWeight: "bold" }}>không gian nhà bạn</Text>
          </Text>
          <View style={styles.cartContainer}>
            <MaterialIcons name="shopping-cart" size={24} color="black" />
          </View>
        </View>
        <Image
          source={require("../assets/images/banner.png")}
          style={styles.banner}
        />

        <View style={styles.list}>
          <Text style={styles.sectionTitle}>Cây trồng</Text>
          <FlatList
            data={productTree}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            scrollEnabled={false} // Không cho cuộn vì ScrollView đã bao quanh
          />

          <Text style={styles.sectionTitle}>Chậu cây trồng</Text>
          <FlatList
            data={productPot}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            scrollEnabled={false} // Không cho cuộn vì ScrollView đã bao quanh
          />
          <Text style={styles.viewMore}>Xem thêm Phụ kiện</Text>
          <Text>Sản phẩm mới</Text>
          <View style={styles.spNew}>
            <View>
              <Text>Lemon Balm Grow Kit</Text>
              <Text>Gồm: hạt giống Lemon Balm,đánh dấu.</Text>
            </View>
            <Image source={require("../assets/images/buttonbanner.png")} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  shopping: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  cartContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#D3D3D3",
    justifyContent: "center",
    alignItems: "center",
  },
  banner: {
    width: "100%",
    height: 205,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",

    marginTop: 10,
  },
  card: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    width: 170,
    height: 145,

    borderRadius: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
  },
  status: {
    color: "gray",
  },
  price: {
    fontSize: 16,
    color: "green",
    fontWeight: "bold",
  },
  list: {
    padding: 20,
  },
  viewMore: {
    textDecorationLine: "underline",
    alignSelf: "flex-end",
    fontSize: 16,
    marginTop: 10,

    marginBottom: 20, // Thêm khoảng cách dưới cùng
  },
  spNew: {
    flexDirection: "row",

    alignItems: "center",
    marginBottom: 20,

    backgroundColor: "gray",

    borderRadius: 5,
  },
});
