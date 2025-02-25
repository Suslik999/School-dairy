import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function GradeItem({ grade }) {
  return (
    <View style={styles.item}>
      <Text>Subject: {grade.subject}</Text>
      <Text>Grade: {grade.grade}</Text>
      <Text>Teacher: {grade.teacherId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: { padding: 15, backgroundColor: '#e0f7fa', borderRadius: 10, marginBottom: 10 },
});