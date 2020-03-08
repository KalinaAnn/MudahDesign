import React, { Component } from 'react'
import {
	Text, 
	View,
	StyleSheet,
	TouchableOpacity
} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { FlatGrid } from 'react-native-super-grid';

class CategoryScreen02 extends Component{
constructor(props) {
    super(props);
    this.state = {
      items: [
        { name: 'Motorcycles', code: '#fff' },
        { name: 'Mom & Kids', code: '#fff' },
        { name: 'Home Appliances', code: '#fff' },

        { name: 'Business for Sale', code: '#fff' },
        { name: 'Travel & Holidays', code: '#fff' },
        { name: 'Sports & Hobbies', code: '#fff' },

        { name: 'Camera & Photography', code: '#fff' },
        { name: 'Fashion', code: '#fff' },
        { name: 'See All +', code: '#fff' },
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
				<View
              style={[styles.itemContainer, { backgroundColor: item.code }]}>
              <Text style={styles.itemName}>{item.name}</Text>
            </View>
		)}
		/>
		);
	}
}
export default CategoryScreen02;

const styles = StyleSheet.create({
	container: {
		flex: 1, 
		alignItems: 'center', 
		justifyContent: 'center'
	},
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