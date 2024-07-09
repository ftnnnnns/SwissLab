

import React from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

let Logo = require('./assets/laba.png');

export default function Analiz() {
    const navigation = useNavigation();

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image style={styles.image} source={Logo} />
            <View style={styles.container1}>
                <Text style={styles.text}>
                    На этой странице предоставлены все виды анализов, которые вы можете сделать у нас:
                </Text>
                <View style={styles.listContainer}>
                    <TouchableOpacity onPress={() => navigation.navigate('Alergen')}>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>АЛЛЕРГОЛОГИЧЕСКИЕ ИССЛЕДОВАНИЯ</Text>
                            <Text style={styles.price}>от 75 000 сум</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Ayto')}>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>АУТОИМУННАЯ ПАТАЛОГИЯ</Text>
                            <Text style={styles.price}>от 50 000 сум</Text>
                       </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Bacterii')}>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>БАКТЕРИОЛОГИЧЕСКИЕ ИССЛЕДОВАНИЯ</Text>
                            <Text style={styles.price}> 200 000 сум</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Biohim')}>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>БИОХИМИЧЕСКИЕ ИССЛЕДОВАНИЯ</Text>
                            <Text style={styles.price}>от 75 000 сум</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Gemo')}>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>ГЕМАТОЛОГИЧЕСКИЕ ИССЛЕДОВАНИЯ</Text>
                            <Text style={styles.price}>от 32 000 сум</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Gene')}>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>ГЕНЕТИЧЕСКИЕ ИССЛЕДОВАНИЯ</Text>
                            <Text style={styles.price}> от 32 000 сум</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Gormon')}>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>ГОРМОНАЛЬНЫЕ ИССЛЕДОВАНИЯ</Text>
                            <Text style={styles.price}>от 150 000 сум</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Infec')}>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>ИНФЕКЦИОННАЯ ИММУНОЛОГИЯ</Text>
                            <Text style={styles.price}> от 45 000 сум</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Gema')}>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>КОМПЛЕКСНЫЕ ИССЛЕДОВАНИЯ</Text>
                            <Text style={styles.price}>от 105 000 сум</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Lecar')}>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>ЛЕКАРСТВЕННЫЙ МОНИТОРИНГ</Text>
                            <Text style={styles.price}>от 200 000 сум</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Mark')}>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>МАРКЕРЫ ОПУХОЛЕВОГО РОСТА</Text>
                            <Text style={styles.price}>от 75 000 сум</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Klin')}>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>ОБЩЕКЛИНИЧЕСКИЕ ИССЛЕДОВАНИЯ</Text>
                            <Text style={styles.price}>от 105 000 сум</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Pisha')}>
                        <View style={styles.item}>
                            <Text style={styles.itemText}>ПИЩЕВЫЕ АЛЛЕРГЕНЫ</Text>
                            <Text style={styles.price}>85 000 сум</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
          
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#fff",
        alignItems: "center",
    },
    container1: {
        flexGrow: 1,
        backgroundColor: "#00BFFF",
        alignItems: "center",
        paddingTop: 20,
    },
    image: {
        width: "50%",
        height: "20%",
        resizeMode: "contain",
        marginTop: 40,
    },
    text: {
        fontSize: 20,
        color: "#fff",
        marginVertical: 20,
        textAlign: "center",
        fontFamily: "Arial",
        fontWeight: "bold",
    },
    listContainer: {
        width: "80%",
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 10,
    },
    item: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
        paddingVertical: 10,
    },
    itemText: {
        fontSize: 18,
        color: "#333",
    },
    price: {
        fontSize: 18,
        color: "#FFC0CB",
    },
});
