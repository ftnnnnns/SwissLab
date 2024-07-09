import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
const allergenTests = [
    { name: "Бактериологическое исследование кала                 ", description: " Бактериологическое исследование кала является важным методом диагностики, который позволяет выявить наличие патогенных бактерий в образцах кала.", price: " 200000сум" },
    { name: "Бактериологическое исследование  отделяемого из глаза, отделяемое верхних дыхательных путей,отделяемое из уха              ", description: " Анализ на бактериологическое исследование отделяемого из глаза, верхних дыхательных путей и уха необходим для правильной диагностики и лечения инфекционных заболеваний в этих областях, а также для профилактики распространения инфекций.", price: " 200000сум" },
// Добавьте остальные анализы аналогичным образом
];

export default function Bacterii({ route }) {
    
const [selectedTest, setSelectedTest] = useState(null);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.text}>Описание бактериологических паталогий</Text>
            <ScrollView contentContainerStyle={styles.container1}>
            <Text style={styles.description1}>
               Бактериологические исследования – это лабораторные методы, направленные на выявление и идентификацию бактерий в различных биологических материалах, таких как кровь, моча, отделяемое из органов и другие. Эти исследования проводятся с целью диагностики инфекционных заболеваний, определения чувствительности возбудителей к антибиотикам, контроля за эффективностью лечения и других медицинских целей.</Text>
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