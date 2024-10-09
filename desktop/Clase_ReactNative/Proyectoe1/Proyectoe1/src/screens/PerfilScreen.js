import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PerfilScreen = () => {
  // Estos datos deberían venir de tu API o estado global
  const usuario = {
    nombre: 'Juan Pérez',
    email: 'juan@example.com',
    numeroCuenta: '1234567890',
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil de Usuario</Text>
      <View style={styles.infoItem}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.value}>{usuario.nombre}</Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.label}>Email:</Text>
        <Text style={styles.value}>{usuario.email}</Text>
      </View>
      <View style={styles.infoItem}>
        <Text style={styles.label}>Número de Cuenta:</Text>
        <Text style={styles.value}>{usuario.numeroCuenta}</Text>
      </View>
    </View>
  );
};
export default PerfilScreen;