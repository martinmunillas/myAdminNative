import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CreateUser from './screens/CreateUser';
import SignIn from './screens/SignIn';
import UserDetails from './screens/UserDetails';
import Home from './screens/Home';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='signIn' options={{ headerShown: false }} component={SignIn} />
      <Stack.Screen name='home' options={{ headerShown: false }} component={Home} />
      <Stack.Screen name='createUser' options={{ headerShown: false }} component={CreateUser} />
      <Stack.Screen name='userDetails' options={{ headerShown: false }} component={UserDetails} />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'red',
  },
});

export const globalStyles = {
  backgroundColor: '#30333a',
  minHeight: '100vh',
};
