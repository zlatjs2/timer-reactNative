import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <View style={styles.left}>
        <Text style={styles.title}>left</Text>
      </View>
      <Text style={styles.title}>Header</Text>
      <View style={styles.right}>
        <Text style={styles.title}>right</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    // flexWrap: 'no-wrap',
    backgroundColor: 'powderblue'
  },
  title: {},
  left: {
  },
  right: {
  }
});

export default Header;
