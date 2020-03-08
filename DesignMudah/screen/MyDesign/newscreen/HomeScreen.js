import React, { Component } from 'react'
import {
  Text, 
  View,
  StyleSheet,
}from 'react-native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack = createStackNavigator();

function HomeDetails(){
  return(
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function HomeScreen(){
  return(
    <Stack.Navigator>
<Stack.Screen name="Home" component={HomeDetails} 
options={{
  headerTintColor: 'white',
  headerStyle: {backgroundColor: 'green'},
}}/>
    </Stack.Navigator>
  );
}
export default HomeScreen;  