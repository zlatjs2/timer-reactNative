import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class AlarmContainer extends Component {
  render() {
    return <View style={styles.container}>
        <Text>
          알람시계
        </Text>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
});

export default AlarmContainer;
