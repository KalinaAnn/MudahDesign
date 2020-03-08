import React, { Component } from 'react'
import {
	Text, 
	View,
	StyleSheet
} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';

function SettingScreen(){
	return (
	<View>
		<Text> SettingScreen </Text>
	</View>);
}

const Stack = createStackNavigator();
function SettingStack({navigation}){
	return(
		<Stack.Navigator>
        <Stack.Screen 
		name="Settings" 
		component={SettingScreen}
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

export default SettingStack;

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