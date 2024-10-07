import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ReportScreen() {
  return (
    <View style={styles.container}>
      <Text>Ver Reportes Financieros</Text>
      <Button title="Generar Reporte" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 }
});
