import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function SavedDetails() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Saved Searches Screen</Text>
    </View>
  );
}

function SavedScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Saved Searches"
        component={SavedDetails}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'green' },
        }}
      />
    </Stack.Navigator>
  );
}
export default SavedScreen;
