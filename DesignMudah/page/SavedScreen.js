import React, { Component } from 'react'
import {
	Text, 
	View,
	StyleSheet
} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';

function SavedScreen(){
	return (
	<View style={styles.container}>
		<Text> SavedScreen </Text>
	</View>);
}

const Stack = createStackNavigator();
function SavedStack({navigation}){
	return(
		<Stack.Navigator>
        <Stack.Screen 
		name="Saved Searches" 
		component={SavedScreen} 
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

export default SavedStack;

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