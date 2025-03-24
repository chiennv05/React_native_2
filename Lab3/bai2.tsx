import { FlatList, StyleSheet, View, ViewToken } from "react-native";
import React from "react";
import { useSharedValue } from "react-native-reanimated";
import ListItem from "./list";

// Tạo danh sách có 50 item, mỗi item có id từ 0 -> 49
const data = new Array(50).fill(0).map((_, index) => ({ id: index }));

export default function Bai2() {
  const viewableItems = useSharedValue<ViewToken[]>([]); // Biến lưu các item đang hiển thị

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        keyExtractor={(item: any) => item.id.toString()} // Khóa duy nhất cho mỗi item
        onViewableItemsChanged={({ viewableItems: vItems }) => {
          viewableItems.value = vItems; // Cập nhật danh sách item đang hiển thị
        }}
        renderItem={(item) => (
          <ListItem item={item.item} viewableItems={viewableItems} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
