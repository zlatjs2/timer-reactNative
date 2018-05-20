import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class HomeContainer extends Component {
  render () {
    return (
      <View>
        <Button
          onPress={() => this.props.navigation.navigate('SettingScreen')}
          title="SettingsContainer"
        />
        <Button
          onPress={() => this.props.navigation.navigate('ClockScreen')}
          title="ClockContainer"
        />
      </View>
    )
  }
}

export default HomeContainer;
