import * as React from 'react';
import { Button, View, Text, StyleSheet, Animated, Icon } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem, } from '@react-navigation/drawer';
import { createMaterialTopTabsNavigator } from '@react-navigation/material-top-tabs'

import HomeScreen from './page/HomeScreen.js';
import SellScreen from './page/SellScreen.js';
import FindScreen from './page/FindScreen.js';

import MyAdScreen from './page/MyAdScreen.js';
import FavAdScreen from './page/FavAdScreen.js';
import InboxScreen from './page/InboxScreen.js';
import SavedScreen from './page/SavedScreen.js';

import AboutScreen from './page/AboutScreen.js';
import SettingScreen from './page/SettingScreen.js';
import LogoutScreen from './page/LogoutScreen.js';


import ShoppingMenuScreen from './page/ShoppingMenuScreen.js';

const Stack = createStackNavigator();

function CardOther(){
	return(
	<ShoppingMenuScreen />
	);
}

function Feed({navigation}){
	return(
	<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
      <Button title="Open drawer" onPress={() => navigation.openDrawer()} />
      <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
    </View>
	);
}

const Drawer = createDrawerNavigator();
function MyDrawer(){
	return(
		<Drawer.Navigator 
		drawerContentOptions={{
        activeTintColor: 'green',}} >
		<Drawer.Screen name="Home" component={HomeScreen}/>
		<Drawer.Screen name="Sell Items" component={SellScreen} />
		<Drawer.Screen name="Find Items" component={FindScreen} />
		
		<Drawer.Screen name="My Ads" component={MyAdScreen} />
		<Drawer.Screen name="Favorite Ads" component={FavAdScreen} />
		<Drawer.Screen name="Inbox" component={InboxScreen} />
		<Drawer.Screen name="Saved Searches" component={SavedScreen} />
		
		<Drawer.Screen name="About the App" component={AboutScreen} />
		<Drawer.Screen name="Setting" component={SettingScreen} />
		<Drawer.Screen name="Logout" component={LogoutScreen} />
		</Drawer.Navigator>
	);
}

function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}

export default App;
