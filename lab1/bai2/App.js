import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import SectionView from "./SectionView";
import CardItem from "./CardItem";

export default function App() {
  const eventInfo = [
    {
      title: "Lịch trình",
      data: {
        location: "Hồ Tràm, Vũng Tàu",
        time: "09:00 AM - 12:00 AM, 12/12/2024",
        transport: "Xe bus",
        image:
          "https://cdn3.ivivu.com/2022/09/T%E1%BB%95ng-quan-du-l%E1%BB%8Bch-V%C5%A9ng-T%C3%A0u-ivivu.jpg",
      },
    },
    {
      title: "Khách sạn",
      data: {
        location: "234 Quang Trung, Hồ Chí Minh",
        time: "06:00 AM - 12:00 AM",
        hotelName: "Hồng Quỳnh",
        button: true,
      },
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {eventInfo.map((section, index) => (
        <SectionView key={index} title={section.title}>
          <CardItem data={section.data} />
        </SectionView>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginTop: 40,
  },
});
