import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
const allergenTests = [
    { name: "Комплекс : Ревматологический                ", description: " Клинический анализ крови (КАК) - это один из основных и наиболее распространенных методов лабораторной диагностики, который позволяет оценить общее состояние организма пациента. В ходе КАК изучается состав крови, включая количество эритроцитов, лейкоцитов, тромбоцитов, гемоглобина, гематокрита и других показателей. Клинический анализ крови может помочь выявить анемию, воспалительные процессы, инфекции, нарушения свертываемости крови и другие патологии", price: " 240000сум" },
    { name: "Комплекс: Щитовидная железа             ", description: " Ретикулоциты - это молодые формы эритроцитов, которые содержатся в крови после выхода из костного мозга. Исследование ретикулоцитов позволяет оценить активность образования красных кровяных клеток и степень их зрелости. Повышенное содержание ретикулоцитов может свидетельствовать о повышенной потребности организма в кислороде (например, при анемии), а также о регенеративных процессах после кровопотери.", price: " 105000сум" },
    { name: "Комплекс : Анемия            ", description: " Общий анализ крови (ОАК) - это комплексное исследование, которое включает в себя оценку количества эритроцитов, лейкоцитов, тромбоцитов, гемоглобина, гематокрита и других показателей. ОАК позволяет выявить различные нарушения в организме, такие как анемия, воспалительные процессы, инфекции, нарушения свертываемости крови и др.", price: " 490000сум" },
    { name: "Комплекс: Липидный обмен            ", description: " Скорость оседания эритроцитов (СОЭ) - это показатель, который отражает скорость оседания эритроцитов в пробирке за определенное время. Повышенная СОЭ может свидетельствовать о наличии воспалительных процессов или инфекций в организме. Низкая СОЭ обычно характерна для нормального состояния организма.", price: " 220000сум" },
{ name: "Комплекс: Подготовка к беремености             ", description: " Скорость оседания эритроцитов (СОЭ) - это показатель, который отражает скорость оседания эритроцитов в пробирке за определенное время. Повышенная СОЭ может свидетельствовать о наличии воспалительных процессов или инфекций в организме. Низкая СОЭ обычно характерна для нормального состояния организма.", price: " 500000сум" },
{ name: "КомплексЖ Функция почек             ", description: " Скорость оседания эритроцитов (СОЭ) - это показатель, который отражает скорость оседания эритроцитов в пробирке за определенное время. Повышенная СОЭ может свидетельствовать о наличии воспалительных процессов или инфекций в организме. Низкая СОЭ обычно характерна для нормального состояния организма.", price: " 230000сум" },

];

export default function LastinA({ route }) {
    
const [selectedTest, setSelectedTest] = useState(null);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.text}>Описание комплексных исследований</Text>
            <ScrollView contentContainerStyle={styles.container1}>
            <Text style={styles.description1}>
            Комплексное обследование организма представляет собой полную проверку состояния и работы всех органов и систем.

Единовременное комплексное медицинское обследование экономит время и деньги. Эта услуга позволяет пройти всех профильных врачей в кратчайшие сроки и получить объективное заключение о состоянии своего здоровья.  </Text>
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