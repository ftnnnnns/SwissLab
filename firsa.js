import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";

const allergenTests = [
    { name: "Биохимическое исследование крови                 ", description: " Исследование биохимических параметров крови играет важную роль в диагностике различных заболеваний. Оно позволяет оценить функционирование органов и систем организма, таких как печень, почки, сердце, поджелудочная железа и др. Биохимический анализ крови помогает выявить нарушения обмена веществ, дефицит или избыток определенных веществ, а также контролировать эффективность лечения.", price: " 85000сум" },
    { name: "Биохимическое исследование мочи                ", description: " Исследование биохимических параметров мочи является важным методом диагностики заболеваний почек, мочевыводящих путей и других органов. Оно позволяет выявить наличие белка, глюкозы, кетоновых тел и других веществ в моче, что может свидетельствовать о различных патологиях. Также анализ мочи помогает контролировать состояние здоровья и эффективность лечения.", price: " 130000сум" },
    { name: "Спецефические белки                 ", description: " Анализ на специфические белки: Исследование уровня специфических белков в организме может быть необходимо для диагностики определенных заболеваний, мониторинга состояния здоровья или эффективности лечения. Например, определение уровня С-реактивного белка может использоваться для оценки степени воспаления в организме.", price: " 75000сум" },
    { name: "Электролиты                       ", description: " Исследование уровня электролитов (например, натрия, калия, хлора) в организме необходимо для оценки гомеостаза и работы клеток. Дисбаланс электролитов может привести к различным нарушениям, таким как аритмии сердца, судороги мышц, дегидратация и другие. Поэтому анализ электролитов имеет важное значение для поддержания нормального функционирования организма.", price: " 95000сум" },
    { name: "Витамины            ", description: "  Исследование уровня витаминов в организме необходимо для оценки питания, выявления дефицита или избытка определенных витаминов, а также для коррекции диеты или применения витаминных препаратов. Витамины играют важную роль в обмене веществ, иммунитете, функционировании органов и систем, поэтому их анализ имеет большое значение для поддержания здоровья.", price: "90000сум" },
    { name: "Ферменты                   ", description: "  Исследование активности ферментов в организме позволяет оценить работу различных органов и систем, выявить патологии, связанные с нарушением функций ферментов. Анализ ферментов может использоваться для диагностики заболеваний печени, сердца, поджелудочной железы и других органов, а также для контроля за эффективностью лечения.", price: " 85000сум" },
    // Добавьте остальные анализы аналогичным образом
];

export default function Biohim({ route }) {
    

    const [selectedTest, setSelectedTest] = useState(null);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.text}>Описание биохимических исследований</Text>
            <ScrollView contentContainerStyle={styles.container1}>
            <Text style={styles.description1}>
                Проведение биохимических исследований является важным компонентом диагностики, лечения и профилактики различных заболеваний, поэтому их стоит делать регулярно для поддержания здоровья и качественного медицинского обслуживания.
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
