import React, { useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

// Định nghĩa chiều cao của header và kích thước avatar
const HEADER_HEIGHT = 220;
const AVATAR_SIZE = 60;
const MIN_AVATAR_SIZE = 0;
const MIN_HEADER_HEIGHT = 0;

// Danh sách danh mục
const categories = ["Popular", "Product Design", "Development", "Project"];

// Danh sách các bài kiểm tra (quizzes)
const quizzes = [
  {
    id: "1",
    category: "Product Design",
    title: "Design System",
    author: "Brandon",
    count: 10,
  },
  {
    id: "2",
    category: "Development",
    title: "React Native 101",
    author: "Jennifer",
    count: 16,
  },
  {
    id: "3",
    category: "Product Design",
    title: "Design System",
    author: "Brandon",
    count: 10,
  },
  {
    id: "4",
    category: "Development",
    title: "React Native 101",
    author: "Jennifer",
    count: 16,
  },
  {
    id: "5",
    category: "Product Design",
    title: "Design System",
    author: "Brandon",
    count: 10,
  },
  {
    id: "6",
    category: "Development",
    title: "React Native 101",
    author: "Jennifer",
    count: 16,
  },
];

const Bai3 = () => {
  // Biến dùng để lưu giá trị cuộn dọc (scrollY)
  const scrollY = useSharedValue(10);

  // Tạo animation cho header (thay đổi chiều cao khi cuộn)
  const headerStyle = useAnimatedStyle(() => {
    return {
      height: withTiming(
        interpolate(
          scrollY.value, // Giá trị cuộn
          [0, HEADER_HEIGHT], // Khi cuộn từ 0px đến HEADER_HEIGHT
          [HEADER_HEIGHT, MIN_HEADER_HEIGHT] // Header sẽ thu nhỏ dần
        ),
        { duration: 200 }
      ),
    };
  });

  // Tạo animation cho văn bản chào hỏi
  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(scrollY.value, [0, 200], [1, 0]), // Opacity giảm dần từ 1 -> 0 khi cuộn 0 -> 200px
      transform: [
        {
          scale: interpolate(scrollY.value, [0, 200], [1, 0.8]), // Giảm kích thước văn bản khi cuộn xuống
        },
      ],
    };
  });

  // Animation cho avatar (hình ảnh)
  const avatarStyle = useAnimatedStyle(() => {
    return {
      width: withTiming(
        interpolate(
          scrollY.value,
          [0, HEADER_HEIGHT], // Khi cuộn từ 0px đến HEADER_HEIGHT
          [AVATAR_SIZE, MIN_AVATAR_SIZE] // Kích thước avatar sẽ giảm từ 60px về 0px
        ),
        { duration: 200 }
      ),
      height: withTiming(
        interpolate(
          scrollY.value,
          [0, HEADER_HEIGHT],
          [AVATAR_SIZE, MIN_AVATAR_SIZE]
        ),
        { duration: 200 }
      ),
      opacity: withTiming(
        interpolate(scrollY.value, [0, HEADER_HEIGHT], [1, 0.5]), // Giảm độ trong suốt của avatar khi cuộn
        { duration: 200 }
      ),
    };
  });

  return (
    <View style={styles.container}>
      {/* Header */}
      <Animated.View style={[styles.header, headerStyle]}>
        {/* Ảnh đại diện có hiệu ứng thu nhỏ */}
        <Animated.Image
          source={{ uri: "https://randomuser.me/api/portraits/men/1.jpg" }}
          style={[styles.avatar, avatarStyle]}
        />
        {/* Văn bản chào hỏi có hiệu ứng mờ dần */}
        <Animated.Text style={[styles.greeting, animatedTextStyle]}>
          Mornin' Mark!{"\n"}Ready for a quiz?
        </Animated.Text>
      </Animated.View>

      {/* Danh mục */}
      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.category, index === 0 && styles.categoryActive]}
          >
            <Text
              style={[
                styles.categoryText,
                index === 0 && styles.categoryTextActive,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Danh sách các bài kiểm tra phổ biến */}
      <Text style={styles.sectionTitle}>Popular Quizzes</Text>
      <FlatList
        data={quizzes}
        keyExtractor={(item) => item.id}
        onScroll={(event) => {
          scrollY.value = event.nativeEvent.contentOffset.y; // Cập nhật giá trị cuộn khi danh sách cuộn
        }}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingTop: HEADER_HEIGHT }}
        renderItem={({ item }) => (
          <View style={styles.quizCard}>
            <View>
              <Text style={styles.quizCategory}>{item.category}</Text>
              <Text style={styles.quizTitle}>{item.title}</Text>
              <Text style={styles.quizAuthor}>👤 {item.author}</Text>
            </View>
            <View style={styles.quizCount}>
              <Text style={styles.quizCountText}>Q {item.count}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F9F9F9" },

  // Header (Thanh tiêu đề)
  header: {
    backgroundColor: "#008037",
    padding: 20,
    paddingTop: 50,
    flexDirection: "column",
    height: 300,
    justifyContent: "center",
  },
  avatar: { width: 100, height: 100, borderRadius: 25, marginRight: 10 },
  greeting: { color: "#FFF", fontSize: 22, fontWeight: "bold", flex: 1 },

  // Danh mục thể loại
  categoryContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#008037",
  },
  category: { padding: 10, marginRight: 10, borderRadius: 20 },
  categoryActive: { backgroundColor: "#dbead5", opacity: 0.5 },
  categoryText: { color: "#333", fontSize: 14 },
  categoryTextActive: { color: "#FFF", fontWeight: "bold" },

  // Tiêu đề phần danh sách bài kiểm tra
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 15,
  },

  // Thiết kế thẻ bài kiểm tra
  quizCard: {
    backgroundColor: "#FFF",
    padding: 15,
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  quizCategory: { fontSize: 12, color: "#777" },
  quizTitle: { fontSize: 16, fontWeight: "bold", marginVertical: 5 },
  quizAuthor: { fontSize: 12, color: "#555" },
  quizCount: { backgroundColor: "#5B72F2", borderRadius: 15, padding: 8 },
  quizCountText: { color: "#FFF", fontWeight: "bold" },
});

export default Bai3;
