import React, { Component } from 'react'
import {
	Text, 
	View,
	StyleSheet,
	TouchableOpacity, 
	Button,
	Alert,Dimensions
	
} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { FlatGrid } from 'react-native-super-grid';
import { CardViewWithIcon } from 'react-native-simple-card-view';

import LogoutScreen from './LogoutScreen.js';
import ShoppingMenuScreen from './ShoppingMenuScreen.js';

function CardOther(){
	return(
	<ShoppingMenuScreen />
	);
}

class CardLayout extends Component {
	constructor(props){
		super(props);
		this.state = ({
			github: 0,
		})
	}
	render(){
		const miniCardStyle  = {
			shadowColor       : '#000000',
			shadowOffsetWidth : 2,
			shadowOffsetHeight: 2,
			shadowOpacity     : 0.1,
			shadowRadius      : 5,
			bgColor           : '#ffffff',
			padding           : 5,
			margin            : 5,
			borderRadius      : 3,
			elevation         : 3,
			width             : (Dimensions.get("window").width / 2) - 10};
			
		return(
		<View style={ styles.container }>
        <View style={ {alignItems   : "center",flexDirection: "row",flexWrap     : 'wrap',} }>
          <CardViewWithIcon
            withBackground={ false }
            androidIcon={ 'logo-github' }
            iosIcon={ 'logo-github' }
            iconHeight={ 30 }
            iconColor={ '#333' }
            title={ 'GITHUB' }
            contentFontSize={ 20 }
            titleFontSize={ 12 }
            style={ miniCardStyle }
            content={ this.state.github.toString() }
            onPress={ () => this.setState({
                     github       : this.state.github + 1
            }) }
          />
          <CardViewWithIcon
            withBackground={ false }
            androidIcon={ 'logo-youtube' }
            iosIcon={ 'logo-youtube' }
            iconHeight={ 30 }
            iconColor={ '#ff0000' }
            title={ 'YOUTUBE' }
            contentFontSize={ 10 }
            titleFontSize={ 12 }
            style={ miniCardStyle }
          />
        </View>
      </View>);
	}
}

class CategoryScreen01 extends Component{
constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: 'LogoutScreen', code: '#fff', page:'LogoutScreen' },
        { name: 'Properties', code: '#fff' },
        { name: 'Jobs', code: '#fff' },

        { name: 'Services', code: '#fff' },
        { name: 'Furniture', code: '#fff' },
        { name: 'Electronics', code: '#fff' },

        { name: 'Pets', code: '#fff' },
        { name: 'Men\'s Collection', code: '#fff' },
        { name: 'Women Collection', code: '#fff' },
      ],
    };
}
	render(){
		return(
		<FlatGrid
		staticDimension={395}
		items={this.state.items}
		spacing={8}
		
		renderItem={({item}) => (
			<TouchableOpacity onPress={() => alert('ji')}>
            <View
              style={[styles.itemContainer, { backgroundColor: item.code }]}>
			  <Text style={styles.itemName}>{item.name}</Text>
			  
            </View>
          </TouchableOpacity>
		)}
		/>
		);
	}
}
export default CategoryScreen01;

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go to Details... again"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
	container: {flex           : 2, alignItems     : 'center',backgroundColor: '#F5FCFF',paddingTop     : 25,},
	gridView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 15,
    padding: 10,
    height: 120,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  itemName: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
    textAlign: 'center',
  },
})