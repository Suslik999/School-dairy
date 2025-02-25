import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default function RoleSelectionScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Select role</Text>
      <Button mode="contained" onPress={() => navigation.navigate('teacher')} style={{ marginBottom: 10 }}>
        teacher
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('student')}>
        student
      </Button>
    </View>
  );
}