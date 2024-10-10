import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Bienvenido a la Plataforma Banca Estebanquito</Text>
      
      <View>
        <Text style={styles.accountTitle2}>Cuenta</Text>
      </View>
      
      <View style={styles.accountInfoContainer}>
        <Text style={styles.accountTitle}>Ahorros</Text>
        <Text style={styles.accountNumber}>91-487434-11</Text>
        <Text style={styles.balance}>$400,000.00</Text>
      </View>

      <View style={styles.buttonContainer}>
        {/* Primera columna */}
        <View style={styles.column}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('Cuenta')}
          >
            <Text style={styles.buttonText}>Gestión de Cuentas</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('Transacciones')}
          >
            <Text style={styles.buttonText}>Transacciones</Text>
          </TouchableOpacity>
        </View>

        {/* Segunda columna */}
        <View style={styles.column}>
          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('Prestamos')}
          >
            <Text style={styles.buttonText}>Solicitudes de Préstamos</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button} 
            onPress={() => navigation.navigate('Reportes')}
          >
            <Text style={styles.buttonText}>Reportes Financieros</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f0f5',  // Fondo claro
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#8A05BE', // Color púrpura Nubank
    marginBottom: 30,
    textAlign: 'center',
  },
  accountInfoContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 40,
    width: '100%',
    alignItems: 'center',
  },
  accountTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A0072', // Púrpura oscuro
    marginBottom: 5,
  },
  accountTitle2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4A0072', // Púrpura oscuro
    marginBottom: 5,
  },
  accountNumber: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
  balance: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#8A05BE', // Color púrpura 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  column: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },
  button: {
    backgroundColor: '#8A05BE', // Púrpura 
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // Blanco
  },
});