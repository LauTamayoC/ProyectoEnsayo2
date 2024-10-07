import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Bienvenido a la Plataforma Banca Estebanquito</Text>
      <Button title="Gestión de Cuentas" onPress={() => navigation.navigate('Account')} />
      <Button title="Transacciones" onPress={() => navigation.navigate('Transaction')} />
      <Button title="Solicitudes de Préstamos" onPress={() => navigation.navigate('Loan')} />
      <Button title="Reportes Financieros" onPress={() => navigation.navigate('Reports')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 }
});
