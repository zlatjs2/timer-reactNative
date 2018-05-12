import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

const Footer = (props) => {
  return (
    <View style={styles.footer}>
      <Text>Footer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  footer: {
    height: 50,
    backgroundColor: 'steelblue'
  }
});

export default Footer;
