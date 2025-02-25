import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import api from '../api/api';

export default function TeacherScreen() {
  const [studentId, setStudentId] = useState('');
  const [subject, setSubject] = useState('');
  const [grade, setGrade] = useState('');

  const handleAddGrade = async () => {
    try {
      await api.post('/grades', { studentId, subject, grade, teacherId: 'teacher1' });
      Alert.alert('Success');
      setStudentId('');
      setSubject('');
      setGrade('');
    } catch (err) {
      Alert.alert('Error');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Добавить оценку</Text>
      <TextInput placeholder="ID" value={studentId} onChangeText={setStudentId} style={styles.input} />
      <TextInput placeholder="Subject" value={subject} onChangeText={setSubject} style={styles.input} />
      <TextInput placeholder="Grade" value={grade} onChangeText={setGrade} style={styles.input} keyboardType="numeric" />
      <Button mode="contained" onPress={handleAddGrade}>Add</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 22, marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 8 },
});