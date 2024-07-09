import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
const allergenTests = [
    { name: "Карбамезепин                ", description: " Клинический анализ крови (КАК) - это один из основных и наиболее распространенных методов лабораторной диагностики, который позволяет оценить общее состояние организма пациента. В ходе КАК изучается состав крови, включая количество эритроцитов, лейкоцитов, тромбоцитов, гемоглобина, гематокрита и других показателей. Клинический анализ крови может помочь выявить анемию, воспалительные процессы, инфекции, нарушения свертываемости крови и другие патологии", price: " 22000сум" },
    { name: "Вальпроевая кислота            ", description: " Ретикулоциты - это молодые формы эритроцитов, которые содержатся в крови после выхода из костного мозга. Исследование ретикулоцитов позволяет оценить активность образования красных кровяных клеток и степень их зрелости. Повышенное содержание ретикулоцитов может свидетельствовать о повышенной потребности организма в кислороде (например, при анемии), а также о регенеративных процессах после кровопотери.", price: " 200000сум" },

];

export default function Lecar({ route }) {
    
const [selectedTest, setSelectedTest] = useState(null);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.text}>Лекарственный мониторинг</Text>
            <ScrollView contentContainerStyle={styles.container1}>
            <Text style={styles.description1}>
          Лекарственный мониторинг — это процесс контроля за концентрацией лекарственного средства в крови пациента для обеспечения эффективности лечения и предотвращения побочных эффектов. Он включает в себя регулярное измерение концентрации лекарства в крови, анализ результатов и, при необходимости, коррекцию дозировки.

Цель лекарственного мониторинга — достижение оптимальной терапевтической концентрации лекарства у пациента. Это особенно важно для лекарств с узким терапевтическим диапазоном, у которых дозировка должна быть очень точной.

Лекарственный мониторинг часто применяется при лечении заболеваний, требующих индивидуализированного подхода к дозировке лекарств, например, при применении антибиотиков, антикоагулянтов, противоэпилептических препаратов и др.
  </Text>
            </ScrollView>
            <ScrollView contentContainerStyle={styles.container}>
            <Text>
               
            </Text>
            </ScrollView>

            {allergenTests.map((test, index) => (
                <TouchableOpacity key={index} onPress={() => setSelectedTest(selectedTest === index ? null : index)}>
                    <View style={styles.item}>
               
                        <Text style={styles.itemText}>{test.name}</Text>
                        <Text style={styles.price}>{test.price}</Text>
                    </View>
                    {selectedTest === index && (
                        <Text style={styles.description}>{test.description}</Text>
                    )}
                </TouchableOpacity>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        padding: 20, // Добавляем отступы по 20 единиц с каждой стороны
    },
    container1: {
        flexGrow: 1,
        backgroundColor: "#00BFFF",
        alignItems: "center",
        padding: 20, // Добавляем отступы по 20 единиц с каждой стороны
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    description: {
        fontSize: 18,
        color: "#333",
        textAlign: "justify",
        marginBottom: 10,
    },
     description1: {
        fontSize: 18,
        color: "white",
        textAlign: "justify",
        marginBottom: 10,
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "stretch", // Центрируем элементы по вертикали
        marginBottom: 10,
        paddingHorizontal: 20,
        backgroundColor: "#f0f0f0",
        borderRadius: 5,
        padding: 10,
    },
    itemText: {
        flex: 1, // Растягиваем текст на всю доступную ширину
        fontSize: 20,
        color: "#555",
        marginRight: 10, // Добавляем отступ справа
    },
    price: {
        fontSize: 18,
        color: "#B22222",
        
    },
});