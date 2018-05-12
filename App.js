import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import Footer from './Footer';

class App extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Header />
        <View style={styles.container} />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  container: {
    flexGrow: 1,
    backgroundColor: 'skyblue'
  }
});

export default App;
