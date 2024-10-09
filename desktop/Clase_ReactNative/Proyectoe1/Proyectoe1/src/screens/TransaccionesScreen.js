import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const TransaccionesScreen = () => {
  const transacciones = [
    { id: '1', descripcion: 'Depósito', monto: 1000, fecha: '2024-03-15' },
    { id: '2', descripcion: 'Retiro', monto: -500, fecha: '2024-03-14' },
    // Agrega más transacciones aquí
  ];

  const renderItem = ({ item }) => (
    <View style={styles.transactionItem}>
      <Text style={styles.descripcion}>{item.descripcion}</Text>
      <Text style={[styles.monto, { color: item.monto > 0 ? 'green' : 'red' }]}>
        ${Math.abs(item.monto)}
      </Text>
      <Text style={styles.fecha}>{item.fecha}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Transacciones</Text>
      <FlatList
        data={transacciones}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};
export default TransaccionesScreen;