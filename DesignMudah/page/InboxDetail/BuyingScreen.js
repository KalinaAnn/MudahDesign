import React, { Component } from 'react'
import {
	Text, 
	View,
	StyleSheet
} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

function BuyingScreen(){
	return (
	<View style={styles.container}>
		<Text> There is nothing here yet </Text>
	</View>);
}
export default BuyingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center'
	},
})