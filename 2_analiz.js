import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from "react-native";
const allergenTests = [
    { name: "Диагностика заболеваний печени и ЖКТ                 ", description: " Диагностика заболеваний печени и ЖКТ имеет важное значение для раннего выявления патологий, так как эти органы играют ключевую роль в пищеварении и метаболизме. Позднее обнаружение заболеваний может привести к серьезным осложнениям, включая цирроз или рак.", price: " 340000сум" },
    { name: "Диагностика системных заболеваний               ", description: " Диагностика системных заболеваний необходима для определения стратегии лечения и предотвращения прогрессирования заболевания. Такие патологии, как аутоиммунные заболевания или системный васкулит, могут оказывать существенное воздействие на организм в целом, поэтому раннее выявление и точное диагностирование помогают своевременно начать лечение и улучшить прогноз для пациента.", price: " 320000сум" },
    { name: "Интерлейкины                 ", description: " Изучение уровня интерлейкинов в организме позволяет оценить состояние воспалительных процессов. Эти сигнальные молекулы имеют ключевое значение в иммунной системе, поэтому анализ интерлейкинов помогает определить наличие воспалительных реакций и выбрать соответствующие методы лечения.", price: " 175000сум" },
    { name: "Имунный статус                        ", description: " Оценка иммунного статуса является важным компонентом для выявления нарушений в работе иммунной системы. Это позволяет предотвратить инфекции, аллергические реакции и другие проблемы, а также способствует разработке индивидуальной стратегии поддержания здоровья.", price: " 95000сум" },
    { name: "Иммуносуперессоры            ", description: " Применение иммуносупрессоров играет важную роль в ледении автоиммунных заболеваний и после трансплантации органов. Контроль дозировки и правильный выбор препаратов необходимы для поддержания баланса в иммунной системе и предотвращения осложнений.", price: "750000сум" },
    { name: "Диагностика   артирита                ", description: " Диагностика артрита позволяет выявить воспалительные процессы в суставах, что помогает начать лечение на ранних стадиях и предотвратить разрушение суставов и нарушение их функций. Раннее обнаружение артрита способствует улучшению качества жизни пациентов и предотвращению прогрессирования заболевания.", price: " 400000сум" },
    // Добавьте остальные анализы аналогичным образом
];
export default function Ayto({ route }) {
    const [selectedTest, setSelectedTest] = useState(null);

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.text}>Описание аутоимунных паталогий</Text>
            <ScrollView contentContainerStyle={styles.container1}>
            <Text style={styles.description1}>
                Аутоиммунные патологии - это группа заболеваний, при которых иммунная система организма атакует собственные ткани и клетки, 
                принимая их за враждебные. Это может привести к воспалению, повреждению органов и различным симптомам, в зависимости от конкретного заболевания.
                Анализы на аутоиммунные патологии могут помочь врачам выявить наличие таких заболеваний и определить их тип. 
                Раннее обнаружение аутоиммунных заболеваний позволяет начать лечение на ранних стадиях, что может улучшить прогноз и качество жизни пациента.
                 Также анализы на аутоиммунные патологии могут быть полезны при мониторинге состояния пациента и эффективности лечения
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