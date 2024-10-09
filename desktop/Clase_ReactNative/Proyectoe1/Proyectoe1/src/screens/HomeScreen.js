import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  // Estos datos normalmente vendrían de una API o del estado global de la app
  const accountBalance = 5000.00;
  const userName = "Juan Pérez";
  const lastTransactions = [
    { id: 1, description: "Depósito", amount: 1000, date: "2024-03-15" },
    { id: 2, description: "Retiro ATM", amount: -200, date: "2024-03-14" },
    { id: 3, description: "Pago de factura", amount: -150, date: "2024-03-13" },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Bienvenido, {userName}</Text>
        <Text style={styles.balanceText}>Saldo actual: ${accountBalance.toFixed(2)}</Text>
      </View>

      <View style={styles.quickActions}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => navigation.navigate('Transacciones')}
        >
          <Text style={styles.actionButtonText}>Nueva Transacción</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => navigation.navigate('Prestamos')}
        >
          <Text style={styles.actionButtonText}>Solicitar Préstamo</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.recentTransactions}>
        <Text style={styles.sectionTitle}>Transacciones Recientes</Text>
        {lastTransactions.map((transaction) => (
          <View key={transaction.id} style={styles.transactionItem}>
            <Text style={styles.transactionDescription}>{transaction.description}</Text>
            <Text style={[
              styles.transactionAmount,
              {color: transaction.amount > 0 ? 'green' : 'red'}
            ]}>
              ${Math.abs(transaction.amount).toFixed(2)}
            </Text>
            <Text style={styles.transactionDate}>{transaction.date}</Text>
          </View>
        ))}
      </View>

      <TouchableOpacity 
        style={styles.reportButton}
        onPress={() => navigation.navigate('Reportes')}
      >
        <Text style={styles.reportButtonText}>Ver Reporte Financiero</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#003366',
    padding: 20,
    alignItems: 'center',
  },
  welcomeText: {
    color: 'white',
    fontSize: 18,
    marginBottom: 10,
  },
  balanceText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  actionButton: {
    backgroundColor: '#0066cc',
    padding: 10,
    borderRadius: 5,
  },
  actionButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  recentTransactions: {
    margin: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transactionItem: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionDescription: {
    flex: 2,
  },
  transactionAmount: {
    flex: 1,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  transactionDate: {
    flex: 1,
    textAlign: 'right',
    color: 'gray',
  },
  reportButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    margin: 20,
    alignItems: 'center',
  },
  reportButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default HomeScreen;