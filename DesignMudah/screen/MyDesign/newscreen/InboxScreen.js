import React, { Component } from 'react'
import {
  Text, 
  View,
  StyleSheet
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen() {
  return (
    <View style = { styles.container }>
      <Text> Home! </Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();
function MyTab() {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Profile" component={HomeScreen}/>
      </Tab.Navigator>
  );
}

function InboxScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Find Items"
        component={MyTab}
        options={{
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'green' },
        }}
      />
    </Stack.Navigator>
  );
}
export default InboxScreen

const styles = StyleSheet.create ({
  container: { 
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
});
