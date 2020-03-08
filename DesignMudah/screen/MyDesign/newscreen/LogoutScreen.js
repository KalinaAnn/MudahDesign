import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function LogDetails() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Logout Screen</Text>
    </View>
  );
}

function LogScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Logout"
        component={LogDetails}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'green' },
        }}
      />
    </Stack.Navigator>
  );
}
export default LogScreen;
