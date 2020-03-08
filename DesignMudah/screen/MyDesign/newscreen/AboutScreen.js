import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import ListView from './AboutHelper/ListHelper'

const Stack = createStackNavigator();

function AboutDetails() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>About the App Screen</Text>
    </View>
  );
}

function AboutScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About the App"
        component={ListView}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'green' },
        }}
      />
    </Stack.Navigator>
  );
}
export default AboutScreen;
