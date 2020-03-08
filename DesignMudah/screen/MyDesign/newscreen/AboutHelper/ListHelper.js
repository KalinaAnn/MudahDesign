import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { ListItem } from 'react-native-elements';

const list = [
  { title: 'Quick & Easy Guide to Sell' },
  { title: 'Contact Support' },
  { title: 'Shop Safety Tips' },
  { title: 'Privacy Policy' },
  { title: 'Terms & Conditions' },
  { title: 'Join our Beta Test Team' },
]

export default class ListView extends Component {
  render() {
    return (
      <View>
        {list.map((item, index) => (
          <ListItem key={index} title={item.title} bottomDivider chevron />
        ))}
      </View>
    );
  }
}
