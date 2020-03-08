import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

function SettingScreen() {
  return (
    <View style={styles.container}>
      <Text> Profile Screen ! </Text>
    </View>
  );
}

export default SettingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
