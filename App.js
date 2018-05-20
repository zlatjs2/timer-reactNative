import React, { Component } from 'react';
import { View, Text } from 'react-native';
import  { createStackNavigator }  from 'react-navigation';
import HomeContainer from './containers/HomeContainer';
import ClockContainer from './containers/ClockContainer';
import SettingsContainer from './containers/SettingsContainer';

class App extends Component {
  render() {
    const AppNavigator = createStackNavigator({
      HomeScreen: {
        screen: HomeContainer
      },
      SettingScreen: {
        screen: SettingsContainer
      },
      ClockScreen: {
        screen: ClockContainer
      }
    });
    return (
      <AppNavigator />
    );
  }
}

export default App;
