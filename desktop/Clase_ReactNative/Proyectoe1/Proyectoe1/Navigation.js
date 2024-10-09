import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons'; 

import LoginScreen from './screens/LoginScreen';
import RegistroScreen from './screens/RegistroScreen';
import HomeScreen from './screens/HomeScreen';
import TransaccionesScreen from './screens/TransaccionesScreen';
import PrestamosScreen from './screens/PrestamosScreen';
import ReportesScreen from './screens/ReportesScreen';
import PerfilScreen from './screens/PerfilScreen';



const AuthStack = createStackNavigator();
const MainTab = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const TransaccionesStack = createStackNavigator();
const PrestamosStack = createStackNavigator();
const ReportesStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AuthNavigator = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={LoginScreen} />
    <AuthStack.Screen name="Registro" component={RegistroScreen} />
  </AuthStack.Navigator>
);

const HomeStackNavigator = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
    {/* Agrega aquí más pantallas relacionadas con Home si es necesario */}
  </HomeStack.Navigator>
);

const TransaccionesStackNavigator = () => (
  <TransaccionesStack.Navigator>
    <TransaccionesStack.Screen name="Transacciones" component={TransaccionesScreen} />
    {/* Agrega aquí más pantallas relacionadas con Transacciones si es necesario */}
  </TransaccionesStack.Navigator>
);

const PrestamosStackNavigator = () => (
  <PrestamosStack.Navigator>
    <PrestamosStack.Screen name="Prestamos" component={PrestamosScreen} />
    {/* Agrega aquí más pantallas relacionadas con Préstamos si es necesario */}
  </PrestamosStack.Navigator>
);

const ReportesStackNavigator = () => (
  <ReportesStack.Navigator>
    <ReportesStack.Screen name="Reportes" component={ReportesScreen} />
   
  </ReportesStack.Navigator>
);

const MainTabNavigator = () => (
  <MainTab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Transacciones') {
          iconName = focused ? 'list' : 'list-outline';
        } else if (route.name === 'Prestamos') {
          iconName = focused ? 'cash' : 'cash-outline';
        } else if (route.name === 'Reportes') {
          iconName = focused ? 'bar-chart' : 'bar-chart-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    }}
  >
    <MainTab.Screen name="Home" component={HomeStackNavigator} />
    <MainTab.Screen name="Transacciones" component={TransaccionesStackNavigator} />
    <MainTab.Screen name="Prestamos" component={PrestamosStackNavigator} />
    <MainTab.Screen name="Reportes" component={ReportesStackNavigator} />
  </MainTab.Navigator>
);

const DrawerNavigator = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Main" component={MainTabNavigator} />
    <Drawer.Screen name="Perfil" component={PerfilScreen} />
    <Drawer.Screen name="Configuraciones" component={ConfiguracionesScreen} />
  </Drawer.Navigator>
);

const RootNavigator = ({ isAuthenticated }) => (
  <NavigationContainer>
    {isAuthenticated ? <DrawerNavigator /> : <AuthNavigator />}
  </NavigationContainer>
);

export default RootNavigator;