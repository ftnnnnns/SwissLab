import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyRecord = ({ records }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Мои записи:</Text>
      {records.map((record, index) => (
        <View key={index} style={styles.record}>
          <Text style={styles.recordText}>Клиника: {record.clinic}</Text>
          <Text style={styles.recordText}>Число записи: {record.recordNumber}</Text>
          <Text style={styles.recordText}>Время записи: {record.appointmentTime}</Text>
          <Text style={styles.recordText}>Количество анализов: {record.numberOfTests}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  record: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',
  },
  recordText: {
    fontSize: 16,
  },
});

export default MyRecord;
