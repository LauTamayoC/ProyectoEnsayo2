import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function TransactionScreen() {
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('');

  return (
    <View style={styles.container}>
      <TextInput placeholder="Monto" value={amount} onChangeText={setAmount} style={styles.input} />
      <TextInput placeholder="Tipo (Transferencia/Depósito/Retiro)" value={type} onChangeText={setType} style={styles.input} />
      <Button title="Enviar" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  input: { borderWidth: 1, marginBottom: 10, padding: 8, borderRadius: 5 }
});
