import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Dimensions, Linking } from "react-native";
import { Checkbox } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import * as FileSystem from 'expo-file-system';

export default function Test() {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const [isChecked, setIsChecked] = useState(false);

  const handleRegistration = () => {
    if (!lastName || !firstName || !middleName || !email || !password) {
      setWarning("Пожалуйста, заполните все поля");
    } else if (lastName.length < 3 || firstName.length < 3 || middleName.length < 3) {
      setWarning("Поля должны содержать минимум 3 буквы");
    } else if (password.length < 8) {
      setWarning("Пароль должен содержать минимум 8 символов");
    } else if (!email.includes("@")) {
      setWarning("Некорректный формат почты");
    } else if (!isChecked) {
      setWarning("Вы должны согласиться с условиями");
    } else {
      saveDataToFile();
      navigation.navigate('Myr');
    }
  };

  const saveDataToFile = async () => {
    const data = `Фамилия: ${lastName}, Имя: ${firstName}, Отчество: ${middleName}, Почта: ${email}, Пароль: ${password}`;
    const fileUri = `${FileSystem.documentDirectory}/reg.txt`;
    await FileSystem.writeAsStringAsync(fileUri, data);
  };

  const handleTermsPress = () => {
    Linking.openURL('https://analizy.uz/analyses');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.registrationText}>РЕГИСТРАЦИЯ</Text>
      <TextInput
        style={styles.TextInput}
        placeholder="Фамилия"
        value={lastName}
        onChangeText={text => setLastName(text)}
      />
      <TextInput
        style={styles.TextInput}
        placeholder="Имя"
        value={firstName}
        onChangeText={text => setFirstName(text)}
      />
      <TextInput
        style={styles.TextInput}
        placeholder="Отчество"
        value={middleName}
        onChangeText={text => setMiddleName(text)}
      />
      <TextInput
        style={styles.TextInput}
        placeholder="Почта"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.TextInput}
        placeholder="Пароль"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <View style={styles.checkboxContainer}>
        <Checkbox
          status={isChecked ? 'checked' : 'unchecked'}
          onPress={() => setIsChecked(!isChecked)}
        />
        <Text style={styles.checkboxText}>
          <TouchableOpacity onPress={handleTermsPress}>
            <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>
              Согласен с условиями пользования сервиса
            </Text>
          </TouchableOpacity>
          {'\n'}
          и ознакомлен с политикой конфиденциальности
        </Text>
      </View>
      {warning ? <Text style={styles.warning}>{warning}</Text> : null}
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => handleRegistration()}
      >
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
  registrationText: {
    fontSize: 24,
    marginBottom: 20,
    textTransform: "uppercase",
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
  warning: {
    color: "red",
    marginBottom: 10,
  },

  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#00BFFF",
  },
  loginText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  checkboxText: {
    fontSize: 16,
    marginLeft: 10,
  },
});
