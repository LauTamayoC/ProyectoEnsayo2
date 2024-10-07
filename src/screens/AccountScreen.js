import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <Text>Saldo Actual: $XXXX.XX</Text>
      <Button title="Ver Historial de Transacciones" onPress={() => {}} />
      <Button title="Editar Perfil" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 }
});
