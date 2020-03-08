import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import {FlatGrid } from 'react-native-super-grid'

class Menu extends Component {
  render() {
    const items = [
      { name: 'Peter River', code: '#3498db'},
      { name: 'WET ASPHALT', code: '#34495e' },
    ];

    return (
      <FlatGrid 
      itemsDimensions={130}
      items={items}
      style={styles.gridView}
      renderItem={({ item, index }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCode}>{item.code}</Text>
          </View>
        )}
      />
    );
  }
}
export default Menu

const styles = StyleSheet.create ({
  gridView: {
    marginTop: 20,
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10, 
    height: 150,
  },
  itemName: {
    fontSize: 16, 
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
  },
});
