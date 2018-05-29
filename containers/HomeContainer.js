import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class HomeContainer extends Component {
  static navigationOptions = {
    title: "Main"
  };

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

export default HomeContainer;
