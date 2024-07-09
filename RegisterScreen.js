 import { StatusBar } from "expo-status-bar";
let Logo = require('./assets/laba.png');
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    
    <View style={styles.container}>
      <Image style={styles.image} source={Logo} />
      
      

        <StatusBar style="auto" />
  <View style={styles.inputView}>
    <TextInput
      style={styles.TextInput}
      placeholder="ПочтаХуй"
      placeholderTextColor="#003f5c"
      onChangeText={(email) => setEmail(email)}
    />
  </View>

  

  <TouchableOpacity style={styles.loginBtn}>
    <Text style={styles.loginText}>Войти</Text>
  </TouchableOpacity>
  <TouchableOpacity style={styles.loginBtn}>
    <Text style={styles.loginText}>Зарегистрироваться</Text>
  </TouchableOpacity>
</View>
 );
}

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#fff",
alignItems: "center",
justifyContent: "center",
},

image: {
marginBottom: 40,
width: "50%",
height: "20%",
resizeMode: "contain",
},

welcomeText: {
fontSize: 24,
marginBottom: 10,
},

TextInput: {
height: 50,
width: "80%",
borderColor: "#FFC0CB",
borderWidth: 1,
borderRadius: 30,
padding: 10,
marginBottom: 20,
fontSize: 16,
},

loginBtn: {
width: "80%",
borderRadius: 25,
height: 50,
alignItems: "center",
justifyContent: "center",
marginTop: 40,
backgroundColor: "#DC143C",
},

loginText: {
color: "white",
fontSize: 16,
fontWeight: "bold",
},
});