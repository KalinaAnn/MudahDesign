import React, { Component } from 'react'
import {
	Text, 
	View,
	StyleSheet
} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import {ListItem, Icon} from 'react-native-elements';

const list = [
  { title: 'Quick & Easy Guide to Sell' },
  { title: 'Contact Support' },
  { title: 'Shop Safety Tips' },
  { title: 'Privacy Policy' },
  { title: 'Terms & Conditions' },
  { title: 'Join our Beta Test Team' },
]

function AboutScreen({navigation}){
	return (
	<View>
        {list.map((item, index) => (
          <ListItem key={index} 
		  title={item.title} 
		  bottomDivider 
		  chevron />
        ))}
      </View>
	  );
}

const Stack = createStackNavigator();
function AboutStack({navigation}){
	return(
		<Stack.Navigator>
        <Stack.Screen 
		name="About the App" 
		component={AboutScreen}
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
export default AboutStack;

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