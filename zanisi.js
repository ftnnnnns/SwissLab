import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Modal, 
  TextInput, 
  Button, 
  Picker,
  AsyncStorage
} from 'react-native';
import MyRecord from './myrecord';



const Zapisi = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [clinic, setClinic] = useState('');
  const [recordNumber, setRecordNumber] = useState('');
  const [appointmentTime, setAppointmentTime] = useState('');
  const [numberOfTests, setNumberOfTests] = useState('');
  const [timeOptions, setTimeOptions] = useState([]);
  const [records, setRecords] = useState([]); // Состояние для хранения списка записей
  useEffect(() => {
    loadRecords();
  }, []);
  const saveRecords = async (records) => {
    try {
      await AsyncStorage.setItem('records', JSON.stringify(records));
    } catch (error) {
      console.error('Error saving data: ', error);
    }
  }; 
  const loadRecords = async () => {
    try {
      const savedRecords = await AsyncStorage.getItem('records');
      if (savedRecords !== null) {
        setRecords(JSON.parse(savedRecords));
      }
    } catch (error) {
      console.error('Error loading data: ', error);
    }
  }; 
  // Генерация вариантов выбора времени с интервалом в 30 минут
  const generateTimeOptions = () => {
    const options = [];
    for (let hour = 7; hour < 17; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = `${hour < 10 ? '0' + hour : hour}:${minute === 0 ? '00' : minute}`;
        options.push({ label: time, value: time });
      }
    }
    return options;
  };

  const handleAddRecord = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleSaveRecord = () => {
    const recordData = {
      clinic,
      recordNumber,
      appointmentTime,
      numberOfTests,
    };
    // Добавление новой записи к списку записей
    setRecords([...records, recordData]);
    setRecords(newRecords);
    saveRecords(newRecords); // Сохранение записей в хранилищ
    setClinic('');
    setRecordNumber('');
    setAppointmentTime('');
    setNumberOfTests('');
    setModalVisible(false);
  };

  const handleCancelRecord = (index) => {
    const updatedRecords = [...records];
    updatedRecords.splice(index, 1);
    setRecords(updatedRecords);
    saveRecords(updatedRecords);
  };

  const handleViewRecords = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      
      <TouchableOpacity onPress={handleAddRecord} style={styles.addButton}>
        <Text style={styles.buttonText}>Добавить запись к врачу</Text>
      </TouchableOpacity>
      
      {/* Модальное окно для просмотра записей */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleCloseModal}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Введите данные для записи:</Text>
            <Picker
              selectedValue={clinic}
              style={styles.input}
              onValueChange={(itemValue, itemIndex) => setClinic(itemValue)}
            >
              <Picker.Item label="Выберите клинику" value="" />
              <Picker.Item label="Медицинский оффис на Сырдарье" value="Медицинский оффис на Сырдарье" />
              <Picker.Item label="Медицинский оффис на Сырдарье" value="Медицинский оффис на Сырдарье" />
              <Picker.Item label="Медицинский оффис на Сторительной" value="Медицинский оффис на Сторительной" />
              <Picker.Item label="Медицинский оффис на Кадышево" value="Медицинский оффис на Кадышево" />
              <Picker.Item label="Медицинский оффис на Ганга" value="Медицинский оффис на Ганга" />
              <Picker.Item label="Медицинский оффис на Гито" value="едицинский оффис на Гито" />
              <Picker.Item label="Медицинский оффис на Мерикова" value="Медицинский оффис на Мерикова" />
              <Picker.Item label="Медицинский оффис на Столинко" value="Медицинский оффис на Столинко" />
              <Picker.Item label="Медицинский оффис на городской больнице №1" value="Медицинский оффис на городской больнице №1" />
              <Picker.Item label="Медицинский оффис на Кушбеги" value="Медицинский оффис на Кушбеги" />
              <Picker.Item label="Медицинский оффис на проспекте Мирзо Улугбека" value="Медицинский оффис на проспекте Мирзо Улугбека" />
              <Picker.Item label="Медицинский оффис на Юнус Ота" value="Медицинский оффис на Юнус Ота" />
              <Picker.Item label="Медицинский оффис на Нурафшон" value="Медицинский оффис на Нурафшон" />
              <Picker.Item label="Медицинский оффис на Санпин" value="Медицинский оффис на Санпин" />
              <Picker.Item label="Медицинский оффис на Сергели" value="Медицинский оффис на Сергели" />
              <Picker.Item label="Медицинский оффис на ЦУМ" value="Медицинский оффис на ЦУМ" />
              <Picker.Item label="Медицинский оффис на Чилонзор" value="Медицинский оффис на Чилонзор" />
              <Picker.Item label="Медицинский оффис на ТТЗ" value="Медицинский оффис на ТТЗ" />
              <Picker.Item label="Медицинский оффис на Амир Темура" value="Медицинский оффис на Амир Темура" />
              <Picker.Item label="Медицинский оффис на Санпин, 2" value="Медицинский оффис на Санпин, 2" />
            </Picker>
            <TextInput
              style={styles.input}
              placeholder="Число записи"
              onChangeText={text => setRecordNumber(text)}
              value={recordNumber}
            />
            <Picker
              selectedValue={appointmentTime}
              style={styles.input}
              onValueChange={(itemValue, itemIndex) => setAppointmentTime(itemValue)}
            >
              <Picker.Item label="Выберите время записи" value="" />
              {generateTimeOptions().map((option, index) => (
                <Picker.Item key={index} label={option.label} value={option.value} />
              ))}
            </Picker>
            <TextInput
              style={styles.input}
              placeholder="Количество сдаваемых анализов"
              onChangeText={text => setNumberOfTests(text)}
              value={numberOfTests}
            />
            <Button style={styles.loginBtn} title="Сохранить" onPress={handleSaveRecord} />
            <Button style={styles.loginBtn}  title="Закрыть" onPress={handleCloseModal} />
          </View>
        </View>
      </Modal>
      <MyRecord records={records} onCancelRecord={handleCancelRecord} /> {/* Передаем функцию handleCancelRecord в компонент MyRecord */}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
  addButton: {

    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#DC143C",
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: 280,
    marginBottom: 15,
  },
});

export default Zapisi;
