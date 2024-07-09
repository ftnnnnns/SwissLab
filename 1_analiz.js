import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";

const allergenTests = [
    { name: "Пыльца деревьев                  ", description: " Анализ на пыльцу деревьев важен для определения аллергических реакций на опыление деревьев. Этот анализ поможет выявить возможные аллергии и предпринять меры для снижения контакта с аллергенами, такими как избегание определенных мест или лечение аллергии.", price: " 85000сум" },
    { name: "Животные аллергены                ", description: " Анализ на аллергию к животным поможет выявить реакцию организма на шерсть, слюну или кожный секрет животных, что может быть особенно важно для тех, кто сталкивается с аллергией на домашних питомцев.", price: " 85000сум" },
    { name: "Пыльца злаковых                   ", description: " Анализ на аллергию к пыльце злаковых растений необходим для тех, кто испытывает аллергические реакции во время цветения различных злаков, таких как пшеница, ячмень или овес", price: " 75000сум" },
    { name: "Антисетики                        ", description: " Анализ на аллергию к антибиотикам и противомикробным препаратам поможет избежать серьезных осложнений при лечении инфекций и болезней, учитывая возможные аллергические реакции на эти лекарства.", price: " 95000сум" },
    { name: "Гормональные препараты            ", description: " Анализ на аллергию к гормональным препаратам важен для тех, кто принимает гормональные препараты для лечения различных заболеваний, чтобы избежать нежелательных реакций на эти препараты.", price: "200000сум" },
    { name: "Укусы насекомых                   ", description: " Анализ на аллергию к укусам насекомых необходим для выявления аллергических реакций на укусы комаров, пчел, ос и других насекомых, которые могут вызвать отечь, зуд и даже анафилактический шок у некоторых людей.", price: " 85000сум" },
    // Добавьте остальные анализы аналогичным образом
];


export default function Alergen({ navigation }) {
    const [selectedTest, setSelectedTest] = useState(null);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.text}>Описание аллергологических исследований</Text>
            <ScrollView contentContainerStyle={styles.container1}>
            <Text style={styles.description1}>
                Аллергологические исследования представляют собой специальные методы диагностики,
                направленные на выявление аллергических реакций организма на определенные вещества - аллергены.
                Эти исследования позволяют определить, на какие вещества человек имеет аллергическую реакцию,
                и помогают выявить причину возникновения аллергических симптомов.
                Аллергии могут проявляться различными способами: от насморка и кожных высыпаний до более серьезных реакций,
                таких как анафилактический шок. Поэтому проведение аллергологических исследований является крайне важным
                для точного диагноза и назначения правильного лечения.
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
