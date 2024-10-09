import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ReportesScreen = () => {
  // Estos datos deberían venir de tu API o estado global
  const ingresosTotales = 10000;
  const egresosTotales = 7000;
  const deudasPendientes = 2000;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reportes Financieros</Text>
      <View style={styles.reportItem}>
        <Text style={styles.reportLabel}>Ingresos Totales:</Text>
        <Text style={styles.reportValue}>${ingresosTotales}</Text>
      </View>
      <View style={styles.reportItem}>
        <Text style={styles.reportLabel}>Egresos Totales:</Text>
        <Text style={styles.reportValue}>${egresosTotales}</Text>
      </View>
      <View style={styles.reportItem}>
        <Text style={styles.reportLabel}>Deudas Pendientes:</Text>
        <Text style={styles.reportValue}>${deudasPendientes}</Text>
      </View>
    </View>
  );
};
export default ReportesScreen;