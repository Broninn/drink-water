import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text } from 'native-base';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign'
import { Dashboard } from '../screens/Dashboard';

type ITabRoutes = {
  Settings: undefined;
  Dashboard: undefined;
  Profile: undefined;
}

const Tab = createMaterialBottomTabNavigator<ITabRoutes>();

const Screen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'red', justifyContent: 'center', alignItems: 'center'}} >
      <Text>Oi</Text>
    </View>
  )
}

interface IMyTabs {}

export const Routes: React.FunctionComponent<IMyTabs> = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Settings" component={Screen} options={{
          title: 'Configurações',
          tabBarIcon: () => <Icon name="setting" size={20} color="#fff" />,        
        }} />
        <Tab.Screen name="Dashboard" component={Dashboard} options={{
          title: 'Dashboard',
          tabBarIcon: () => <Icon name="dashboard" size={20} color="#fff" />,        
        }} />
        <Tab.Screen name="Profile" component={Screen} options={{
          title: 'Perfil',
          tabBarIcon: () => <Icon name="user" size={20} color="#fff" />,        
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}