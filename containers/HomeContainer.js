import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import AnimationBox from '../components/AnimationBox';

class HomeContainer extends Component {

  render() {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate("ClockScreen")}
          title="프로젝트1: 타이머"
        />
        <Button
          onPress={() => this.props.navigation.navigate("SettingScreen")}
          title="프로젝트2: 샘플"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    width: 20,
    height: 20,
    backgroundColor: 'gray',
    transform: [
      {
        translateY: 1
      }
    ]
  }
})


export default HomeContainer;
