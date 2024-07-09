import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native"; 

let Panorama = require('./assets/sam.jpg');

export default function Samarcand() {
  return (
    <View style={styles.container}>
      
      <Image style={styles.panorama} source={Panorama} />
      <ScrollView style={styles.clinicsContainer}>
        <View style={styles.clinic}>
          <Text style={styles.clinicName}>Медицинский оффис на Кадышево</Text>
          <Text style={styles.address}>Адрес: г.Ташкент, Ш.Валиханов кучаси, 2 уй, 2 хонадон</Text>
          <Text style={styles.metro}>Ближайшая остановка: Улица Бирлашган</Text>
          <Text style={styles.workingHours}>Время работы: 7:00 - 16:00</Text>
        </View>
        <View style={styles.clinic}>
          <Text style={styles.clinicName}>Медицинский оффис на Ганга</Text>
          <Text style={styles.address}>Адрес: г Самарканд , ул. Ходжа Ахрори Вали, 9</Text>
          <Text style={styles.metro}>Ближайшее остановка: Городская поликлиника №4</Text>
          <Text style={styles.workingHours}>Время работы: 7:00 - 17:00</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00BFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
 workingHours: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  panorama: {
    width: "100%",
    height: 200, // Высота панорамной фотографии
    resizeMode: "cover",
    marginBottom: 20,
  },
  clinicsContainer: {
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: "white"
  },
  clinic: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 10,
  },
  clinicName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  address: {
    fontSize: 16,
    marginBottom: 5,
  },
  metro: {
    fontSize: 16,
    color: "#666",
  },
});
