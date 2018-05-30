import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import  { createStackNavigator }  from 'react-navigation';
import HomeContainer from './containers/HomeContainer';
import ClockContainer from './containers/ClockContainer';
import SettingsContainer from './containers/SettingsContainer';

const RootStack = createStackNavigator(
  {
    HomeScreen: HomeContainer,
    SettingScreen: SettingsContainer,
    ClockScreen: ClockContainer
  },
  {
    initialRouteName: "HomeScreen",
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#fff"
      },
      headerTintColor: "#222",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

class App extends Component {
  render() {
    return (
      <RootStack />
    );
  }
}

export default App;
