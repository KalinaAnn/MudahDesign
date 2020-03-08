import React, { Component } from 'react'
import {
	Text, 
	View,
	StyleSheet
} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

function LogoutScreen(){
	return (
	<View style={styles.container}>
		<Text> LogoutScreen </Text>
	</View>);
}
export default LogoutScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center'
	},
})