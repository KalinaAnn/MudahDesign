import React, { Component } from 'react';
 
import { Platform, StyleSheet, Text, View, Image } from 'react-native';

import { Icon } from 'react-native-elements'
import CardView from 'react-native-cardview' ;

 
 const PlaceDate = () => (
	<View style={styles.cardView_Bottom}>		
		<Text style={styles.cardView_Date}> 21-01-20 </Text>
		<View style={styles.cardView_iconStyle}>	
		<Icon 
				size={15}
				name='location-on'
				type='materialicons'
				color='#909497'/>
		</View>	
		<Text style={styles.cardView_Place}> Kuala Lumpur				
		</Text>
	</View>
 )
 
export default class ShoppingMenuScreen extends Component<{}> {
 
  render() {
 
    return (
 
      <View style={styles.MainContainer}>
         <CardView
          cardElevation={5}
          cardMaxElevation={5}
          cornerRadius={3}
          style={styles.cardViewStyle}>
				<Image style={styles.cardImage} source={require('./image/Honda-Civic.png')}/>
                <Text style={styles.cardView_Header}> Honda Civic </Text>
				<Text style={styles.cardView_Price}> RM 110,000 </Text>
			{PlaceDate()}
        </CardView>
		
		<CardView
          cardElevation={5}
          cardMaxElevation={5}
          cornerRadius={3}
          style={styles.cardViewStyle}>
				<Image style={styles.cardImage} source={require('./image/Honda-Civic.png')}/>
                <Text style={styles.cardView_Header}> Honda Civic </Text>
				<Text style={styles.cardView_Price}> RM 110,000 </Text>
			
			{PlaceDate()}
        </CardView>
		
		<CardView
          cardElevation={5}
          cardMaxElevation={5}
          cornerRadius={3}
          style={styles.cardViewStyle}>
				<Image style={styles.cardImage} source={require('./image/Honda-Civic.png')}/>
                <Text style={styles.cardView_Header}> Honda Civic </Text>
				<Text style={styles.cardView_Price}> RM 110,000 </Text>
			
			{PlaceDate()}
        </CardView>
		
		<CardView
          cardElevation={5}
          cardMaxElevation={5}
          cornerRadius={3}
          style={styles.cardViewStyle}>
				<Image style={styles.cardImage} source={require('./image/Honda-Civic.png')}/>
                <Text style={styles.cardView_Header}> Honda Civic </Text>
				<Text style={styles.cardView_Price}> RM 110,000 </Text>
			
			{PlaceDate()}
        </CardView>

      </View>
 
    );
  }
}
 
const styles = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
	flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
	
 
  },
	cardImage:{
		width: 180,
		height: 150,
	},
  cardViewStyle:{
 
    width: 180, 
    height: 280,
	marginTop: 5,
	marginBottom:5,
    marginLeft:5,
    marginRight:5,
 
  },
 
  cardView_Header:{
 
    fontSize: 18, 
    color: '#000', 
    textAlign: 'left', 
    marginTop: 5,
	fontWeight: 'bold',
 
  },
 
  cardView_Price:{
 
    fontSize: 16, 
    color: '#C70039', 
    textAlign: 'left', 
  },
 
  cardView_Date:{
 
    fontSize: 9, 
    color: '#909497', 
    textAlign: 'left', 
	justifyContent: 'flex-end',
    alignItems: 'flex-end',
	marginRight:15,	
  },
 
  cardView_Place:{
    fontSize: 9, 
    color: '#909497', 
    textAlign: 'right',
	

  },
 
  cardView_Bottom:{
	flexDirection: 'row',
	flexWrap: 'nowrap',
    fontSize: 9, 
    color: '#909497', 
    textAlign: 'right',
	marginTop: 60,
	marginLeft:5,	
	marginRight:15,
  },
  
  cardView_iconStyle: {
	  marginLeft:40,
	  marginBottom: 50,
  }
 
});