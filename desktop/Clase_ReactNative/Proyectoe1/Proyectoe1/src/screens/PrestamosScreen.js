import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const PrestamosScreen = () => {
  const [monto, setMonto] = useState('');
  const [plazo, setPlazo] = useState('');

  const solicitarPrestamo = () => {
    // Aquí iría la lógica para solicitar el préstamo
    console.log('Préstamo solicitado:', { monto, plazo });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Solicitar Préstamo</Text>
      <TextInput
        style={styles.input}
        placeholder="Monto"
        value={monto}
        onChangeText={setMonto}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Plazo (meses)"
        value={plazo}
        onChangeText={setPlazo}
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={solicitarPrestamo}>
        <Text style={styles.buttonText}>Solicitar</Text>
      </TouchableOpacity>
    </View>
  );
};
export default PrestamosScreen;