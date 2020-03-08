import React, { Component } from 'react'
import {
	Text, 
	View,
	StyleSheet
} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { Icon } from 'react-native-elements';

import AllScreen from './InboxDetail/AllScreen.js';
import BuyingScreen from './InboxDetail/BuyingScreen.js';
import SellingScreen from './InboxDetail/SellingScreen.js';

const Tab = createMaterialTopTabNavigator();
function InboxScreen(){
	return (
	<View style={styles.container}>
		<Text> Inbox </Text>
	</View>);
}

function MyTab(){
	return(
	<Tab.Navigator
	tabBarOptions={{
			activeTintColor: 'white',
			indicatorStyle: { backgroundColor: 'white' },
          labelStyle: { fontSize: 12 },
          style: { backgroundColor: 'green' },
        }}>
        <Tab.Screen name="All" 
		component={AllScreen}
		/>
        <Tab.Screen name="Buying" component={BuyingScreen}/>
		<Tab.Screen name="Selling" component={SellingScreen}/>
    </Tab.Navigator>
	);
}

const Stack = createStackNavigator();
function InboxStack({navigation}){
	return(
		<Stack.Navigator>
        <Stack.Screen 
		name="Inbox" 
		component={MyTab} 
		options={{
          headerTintColor: 'white',
          headerStyle: { 
		  backgroundColor: 'green' },
		  headerLeft:() => ( 
		  <Icon 
		  containerStyle={styles.icon}
		  type="feather"
		  name={"menu"}
		  onPress={() => navigation.openDrawer()}
		  color={'#fff'}
		  />
		  ),
        }} />
      </Stack.Navigator>
	);
}
export default InboxStack;

const styles = StyleSheet.create({
	icon: {
    paddingLeft: 10,
  },
	container: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center'
	},
})