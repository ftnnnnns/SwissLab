import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from "react-native";
let map = require('./assets/map.svg');
let anal = require('./assets/analiz.svg');
let ex = require('./assets/exit.svg');
let user = require('./assets/lox.svg');
let calen = require('./assets/calen.png');
let tube = require('./assets/tube.png');
let photo1 = require('./assets/first.jpg');
let photo2 = require('./assets/second.jpg');
let photo3 = require('./assets/tree.jpg');
let photo4 = require('./assets/four.jpg');
let photo5 = require('./assets/five.jpg');

export default function Myr({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView style={styles.content}>
                <View style={styles.topButtonsContainer}>
                    <Text style={styles.buttonTextw}>{'\n'}</Text>
                    <Text style={styles.buttonTextw}>{'\n'}</Text>
                    <Text style={styles.buttonTextw}>{'\n'}</Text>
                    <TouchableOpacity style={styles.Btnn} onPress={() => navigation.navigate('Zapisi')}>
                        <Text style={styles.buttonTextw}>Мои записи{'\n'}</Text>
                        <Image source={calen} style={styles.mapImagee} />
                    </TouchableOpacity>
                    
                </View>
                <Text style={styles.bottomText}>{'\n'}Популярные анализы{'\n'}{'\n'}</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.carousel}>
                    <TouchableOpacity onPress={() => navigation.navigate('Gema')}>
                        <Image source={photo1} style={styles.carouselImage} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Biohim')}>
                        <Image source={photo2} style={styles.carouselImage} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Lecar')}>
                        <Image source={photo3} style={styles.carouselImage} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Gene')}>
                        <Image source={photo4} style={styles.carouselImage} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Gema')}>
                        <Image source={photo5} style={styles.carouselImage} />
                    </TouchableOpacity>
                </ScrollView>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('Home')}>
                    <Image source={ex} style={styles.mapImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('Addresses')}>
                    <Image source={map} style={styles.mapImage} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.Btn} onPress={() => navigation.navigate('Cabinet')}>
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
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
    },
    topButtonsContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 20,
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
        backgroundColor: "#c71414",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 7,
        borderWidth: 2,
        borderColor: "#FFC0CB",
        width: 380,
        height: 150,
        alignItems: 'center',
    },
    Btnnz: {
        backgroundColor: "#00BFFF",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 7,
        borderWidth: 2,
        borderColor: "#FFC0CB",
        width: 190,
        height: 300,
        alignItems: 'center',
    },
    mapImage: {
        width: 30,
        height: 30,
    },
    mapImagee: {
        margin: 10,
        width: 60,
        height: 60,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonTextw: {
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
        color: "white"
    },
    bottomText: {
        fontSize: 25,
        fontWeight: "bold",
        marginTop: 20,
        textAlign: "center",
        color: "#001F3F", // Темно-синий цвет
        textShadowColor: "#7FDBFF", // Цвет обводки текста
        textShadowOffset: { width: 2, height: 2 }, // Смещение обводки
        textShadowRadius: 5, // Радиус размытия обводки
    },
    carousel: {
        marginTop: 10,
        marginBottom: 20,
    },
    carouselImage: {
        width: 250,
        height: 250,
        borderRadius: 10,
        marginRight: 10,
    },
});
