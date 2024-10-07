import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function LoanScreen() {
  const [amount, setAmount] = useState('');
  const [term, setTerm] = useState('');

  return (
    <View style={styles.container}>
      <TextInput placeholder="Monto del Préstamo" value={amount} onChangeText={setAmount} style={styles.input} />
      <TextInput placeholder="Plazo (en meses)" value={term} onChangeText={setTerm} style={styles.input} />
      <Button title="Solicitar Préstamo" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 8, borderRadius: 5 }
});
