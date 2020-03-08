import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function FavAdDetails() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Favorite Ads Screen</Text>
    </View>
  );
}

function FavAdScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite Ads"
        component={FavAdDetails}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'green' },
        }}
      />
    </Stack.Navigator>
  );
}
export default FavAdScreen;
