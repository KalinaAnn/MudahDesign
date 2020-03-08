import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function MyAdDetails() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>My Ads Screen</Text>
    </View>
  );
}

function MyAdScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="My Ads"
        component={MyAdDetails}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'green' },
        }}
      />
    </Stack.Navigator>
  );
}
export default MyAdScreen;
