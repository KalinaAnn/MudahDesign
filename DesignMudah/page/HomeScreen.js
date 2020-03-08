import React, { Component } from 'react'
import {
	Text, 
	View,
	StyleSheet, 
	Image,
	SafeAreaView,
} from 'react-native'
import { Icon } from 'react-native-elements'
import { createStackNavigator } from '@react-navigation/stack';
import {PagerTabIndicator, IndicatorViewPager, PagerTitleIndicator, PagerDotIndicator} from 'react-native-best-viewpager';


 

import CategoryScreen01 from './CategoryScreen01.js'
import CategoryScreen02 from './CategoryScreen02.js'

class AppSwiper extends Component{
render(){
		return(
			<View style={{flex: 1, justifyContent: 'center'}}>
					<IndicatorViewPager
					style={{ height:500,}}
					indicator={this._renderDotIndicator()}>
					
					<View>
						<CategoryScreen01 />
					</View>
					
					<View>
						<CategoryScreen01 />
					</View>

				</IndicatorViewPager>
			</View>
		);
	}
	_renderDotIndicator() {
		return <PagerDotIndicator pageCount={2} />;
	}
}


function HomeScreen(){
	return (
	<View style={styles.container}>
		<Text> Home Screen </Text>
	</View>);
}

function CategoryView(){
	return(
	<View style={styles.container}>
		<Text> CategoryView </Text>
	</View>
	);
}

const Stack = createStackNavigator();
function HomeStack({navigation}){
	return(
	
	<Stack.Navigator>
        <Stack.Screen 
		name="Home" 
		component={AppSwiper}
		options={{
          headerTintColor: 'white',
          headerStyle: { 
		  backgroundColor: 'green' },
		  headerLeft:() => ( 
		  <Icon 
		  containerStyle={styles.iconLeft}
		  type="feather"
		  name={"menu"}
		  onPress={() => navigation.openDrawer()}
		  color={'#fff'}
		  />
		  ),
		  headerRight:() => ( 
		  <Icon 
		  containerStyle={styles.iconRight}
		  type="font-awesome"
		  name={"user-circle"}
		  color={'#fff'}
		  />
		  ),
        }} />
      </Stack.Navigator>
	 
	);
}
export default HomeStack;

const styles = StyleSheet.create({
	iconLeft: {
    paddingLeft: 10,
  },
  iconRight: {
    paddingRight: 10,
  },
	container: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center'
	},
	slideContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  slide1: {
    backgroundColor: "#fff"
  },
  slide2: {
    backgroundColor: "#fff"
  },
})