import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native"; 

let Panorama = require('./assets/gul.jpg');

export default function Gulistan() {
  return (
    <View style={styles.container}>
      
      <Image style={styles.panorama} source={Panorama} />
      <ScrollView style={styles.clinicsContainer}>
        <View style={styles.clinic}>
          <Text style={styles.clinicName}>Медицинский оффис на Сырдарье</Text>
          <Text style={styles.address}>Адрес: г.Гулистан, улю Бирлашган шох</Text>
          <Text style={styles.metro}>Ближайшая остановка: Улица Бирлашган</Text>
          <Text style={styles.workingHours}>Время работы: 8:00 - 16:00</Text>
        </View>
        <View style={styles.clinic}>
          <Text style={styles.clinicName}>Медицинский оффис на Сторительной</Text>
          <Text style={styles.address}>Адрес: г. Гулистан, ул. Строительная, 47</Text>
          <Text style={styles.metro}>Ближайшая остановка: ФОК</Text>
          <Text style={styles.workingHours}>Время работы: 7:00 - 16:00</Text>
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
