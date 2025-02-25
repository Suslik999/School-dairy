import React, { useState } from 'react';
import { View, TextInput, FlatList, Text, StyleSheet, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import api from '../api/api';
import GradeItem from '../components/GradeItem';

export default function StudentScreen() {
  const [studentId, setStudentId] = useState('');
  const [grades, setGrades] = useState([]);

  const fetchGrades = async () => {
    try {
      const { data } = await api.get(`/grades/${studentId}`);
      setGrades(data);
    } catch {
      Alert.alert(Error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>See grades</Text>
      <TextInput placeholder="ID ученика" value={studentId} onChangeText={setStudentId} style={styles.input} />
      <Button mode="contained" onPress={fetchGrades} style={{ marginVertical: 10 }}>Show grades</Button>
      <FlatList data={grades} keyExtractor={(_, index) => index.toString()} renderItem={({ item }) => <GradeItem grade={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 8 },
});