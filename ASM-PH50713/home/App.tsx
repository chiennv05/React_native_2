import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"; // Thư viện Icon
import HomeScreen from "./HomeScreen";

const SearchScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Search Screen</Text>
  </View>
);
const NotificationScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>Notifications Screen</Text>
  </View>
);
const UserScreen = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text>User Screen</Text>
  </View>
);

// Tạo Tab Navigator
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Search") {
              iconName = "search";
            } else if (route.name === "Notifications") {
              iconName = "notifications";
            } else if (route.name === "User") {
              iconName = "person";
            }

            return <MaterialIcons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#007AFF", // Màu icon khi chọn
          tabBarInactiveTintColor: "gray", // Màu icon khi không chọn
          tabBarStyle: { backgroundColor: "#fff", paddingBottom: 5 },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Notifications" component={NotificationScreen} />
        <Tab.Screen name="User" component={UserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
