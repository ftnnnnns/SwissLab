import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native"; 

let Panorama = require('./assets/nnn.jpg');

export default function Tashkent() {
  return (
    <View style={styles.container}>
      
      <Image style={styles.panorama} source={Panorama} />
      <ScrollView style={styles.clinicsContainer}>
        <View style={styles.clinic}>
          <Text style={styles.clinicName}>Медицинский оффис на Мерикова</Text>
          <Text style={styles.address}>Адрес: г.Ташкент, Ш.Валиханов кучаси, 2 уй, 2 хонадон</Text>
          <Text style={styles.metro}>Ближайшая остановка: Улица Бирлашган</Text>
          <Text style={styles.workingHours}>Время работы: 7:00 - 16:00</Text>
        </View>
        <View style={styles.clinic}>
          <Text style={styles.clinicName}>Медицинский оффис на Столинко</Text>
          <Text style={styles.address}>Адрес: г. Ташкент, ул. Абдуллы Кадыри, 1а7</Text>
          <Text style={styles.metro}>Ближайшее метро: Гуляма</Text>
          <Text style={styles.workingHours}>Время работы: 7:00 - 16:00</Text>
        </View>
        <View style={styles.clinic}>
          <Text style={styles.clinicName}>Медицинский оффис на городской больнице №1</Text>
          <Text style={styles.address}>Адрес: г. Ташкент, 1а Асадуллы Ходжаева</Text>
          <Text style={styles.metro}>Ближайшая остановка: Улица Кукча-Дарвоза</Text>
          <Text style={styles.workingHours}>Время работы: 7:00 - 16:00</Text>
        </View>
        <View style={styles.clinic}>
          <Text style={styles.clinicName}>Медицинский оффис на Кушбеги</Text>
          <Text style={styles.address}>Адрес: г. Ташкент, массив Кушбеги 11Б</Text>
          <Text style={styles.metro}>Ближайшая остановка: Горбольница №3</Text>
          <Text style={styles.workingHours}>Время работы: 7:00 - 16:00</Text>
        </View>
        <View style={styles.clinic}>
          <Text style={styles.clinicName}>Медицинский оффис на проспекте Мирзо Улугбека</Text>
          <Text style={styles.address}>Адрес: г. Ташкент, проспект Мирзо Улугбека 126</Text>
          <Text style={styles.metro}>Ближайшая остановка: Институт гинекологии</Text>
          <Text style={styles.workingHours}>Время работы: 7:00 - 16:00</Text>
        </View>
        <View style={styles.clinic}>
          <Text style={styles.clinicName}>Медицинский оффис на Юнус Ота</Text>
          <Text style={styles.address}>Адрес: г. Ташкент, массив Юнусбад, 17- квартал, 25Б</Text>
          <Text style={styles.metro}>Ближайшая остановка: Поликлиника №12</Text>
          <Text style={styles.workingHours}>Время работы: 7:00 - 16:00</Text>
        </View>
        <View style={styles.clinic}>
          <Text style={styles.clinicName}>Медицинский оффис на Нурафшон</Text>
          <Text style={styles.address}>Адрес: г. Ташкент, ул. Нурафшон, 17</Text>
          <Text style={styles.metro}>Ближайшая остановка: Роддом</Text>
          <Text style={styles.workingHours}>Время работы: 7:00 - 16:00</Text>
        </View>
        <View style={styles.clinic}>
          <Text style={styles.clinicName}>Медицинский оффис на Санпин</Text>
          <Text style={styles.address}>Адрес: г. Ташкент, ул Богишамол 21</Text>
          <Text style={styles.metro}>Ближайшая остановка: ТашПМИ</Text>
          <Text style={styles.workingHours}>Время работы: 7:00 - 16:00</Text>
        </View>
        <View style={styles.clinic}>
          <Text style={styles.clinicName}>Медицинский оффис на Сергели</Text>
          <Text style={styles.address}>Адрес: г. Ташкент, массив Сергели - 7а, 12</Text>
          <Text style={styles.metro}>Ближайшая остановка: Сергеливский рынок</Text>
          <Text style={styles.workingHours}>Время работы: 7:00 - 16:00</Text>
        </View>
        <View style={styles.clinic}>
          <Text style={styles.clinicName}>Медицинский оффис на ЦУМ</Text>
          <Text style={styles.address}>Адрес: г. Ташкент, ул Чимкентская дом 1</Text>
          <Text style={styles.metro}>Ближайшая остановка: ЦУМ</Text>
          <Text style={styles.workingHours}>Время работы: 7:00 - 16:00</Text>
        </View>
        <View style={styles.clinic}>
          <Text style={styles.clinicName}>Медицинский оффис на Чилонзор</Text>
          <Text style={styles.address}>Адрес: г. Ташкент, 5-1 квартал, 29 дом</Text>
          <Text style={styles.metro}>Ближайшая остановка: Магазин Спортоваров</Text>
          <Text style={styles.workingHours}>Время работы: 7:00 - 16:00</Text>
        </View>
        <View style={styles.clinic}>
          <Text style={styles.clinicName}>Медицинский оффис на ТТЗ</Text>
          <Text style={styles.address}>Адрес: г. Ташкент, ул  ТТЗ БУЮК ИПАК ЙУЛИ дом 4а</Text>
          <Text style={styles.metro}>Ближайшая остановка: Массив ТТЗ</Text>
          <Text style={styles.workingHours}>Время работы: 7:00 - 16:00</Text>
        </View>
        <View style={styles.clinic}>
          <Text style={styles.clinicName}>Медицинский оффис на Амир Темура</Text>
          <Text style={styles.address}>Адрес: г. Ташкент, ул Амир Темура, 2а</Text>
          <Text style={styles.metro}>Ближайшая остановка: Геологоразведка</Text>
          <Text style={styles.workingHours}>Время работы: 7:00 - 16:00</Text>
        </View>
        <View style={styles.clinic}>
          <Text style={styles.clinicName}>Медицинский оффис на Санпин, 2</Text>
          <Text style={styles.address}>Адрес: г. Ташкент, ул Мевазор,5</Text>
          <Text style={styles.metro}>Ближайшая остановка: Клиника ТашПМИ</Text>
          <Text style={styles.workingHours}>Время работы: 7:00 - 16:00</Text>
        </View>
        {/* Добавьте остальные клиники по аналогии */}
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
