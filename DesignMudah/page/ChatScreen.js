import React, { Component } from 'react'
import {
	Text, 
	View,
	StyleSheet
} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';

function ChatScreen(){
	return (
	<View style={styles.container}>
		<Text> ChatScreen </Text>
	</View>);
}

const Stack = createStackNavigator();
function ChatStack({navigation}){
	return(
		<Stack.Navigator>
        <Stack.Screen 
		name="Favorite Ads" 
		component={ChatScreen}
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
export default ChatScreen;

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