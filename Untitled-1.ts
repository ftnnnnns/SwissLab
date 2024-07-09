import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
import map from './assets/map.svg';
import anal from './assets/analiz.svg';
import ex from './assets/exit.svg';
import user from './assets/lox.svg';
import calen from './assets/calen.png';
import tube from './assets/tube.png';

export default function Myr({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false} style={styles.topButtonsContainer}>
                <TouchableOpacity style={styles.Btnn} onPress={() => navigation.navigate('City1')}>
                    <Text style={styles.buttonText1}>Ташкент{'\n'}<Text style={styles.subText}>(14 лабораторий)</Text></Text>
                  //  <Image source={calen} style={styles.mapImagee} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.Btnnz} onPress={() => navigation.navigate('City2')}>
                    <Text style={styles.buttonText1}>Самарканд{'\n'}<Text style={styles.subText}>(2 лаборатории)</Text></Text>
                  //  <Image source={tube} style={styles.mapImagee} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.Btnnz} onPress={() => navigation.navigate('City3')}>
                    <Text style={styles.buttonText1}>Ангрен{'\n'}<Text style={styles.subText}>(1 лаборатория)</Text></Text>
                  //  <Image source={tube} style={styles.mapImagee} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.Btnnz} onPress={() => navigation.navigate('City4')}>
                    <Text style={styles.buttonText1}>Гулистан{'\n'}<Text style={styles.subText}>(2 лаборатории)</Text></Text>
                  //  <Image source={tube} style={styles.mapImagee} />
                </TouchableOpacity>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('Home')}>
                    <Image source={ex} style={styles.mapImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('Addresses')}>
                    <Image source={map} style={styles.mapImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('Myr')}>
                    <Image source={user} style={styles.mapImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('Analiz')}>
                    <Image source={anal} style={styles.mapImage} />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "flex-end",
    },
    topButtonsContainer: {
        flexDirection: "column",
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginBottom: 10,
        backgroundColor: '#fff',
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        height: 80,
        width: "100%",
        backgroundColor: "#f0f0f0",
    },
    Btn: {
        backgroundColor: "white",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#FFC0CB",
    },
    Btnn: {
        backgroundColor: "#ccc",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 7,
        borderWidth: 2,
        borderColor: "#FFC0CB",
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Btnnz: {
        backgroundColor: "#ccc",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 7,
        borderWidth: 2,
        borderColor: "#FFC0CB",
        height: 150,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mapImage: {
        width: 30,
        height: 30,
    },
    mapImagee: {
        width: 40,
        height: 40,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonText1: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        color: "black"
    },
    buttonTextw: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        color: "white"
    },
    subText: {
        fontSize: 14,
        fontWeight: "normal",
        textAlign: "center",
        color: "#666",
    },
});
