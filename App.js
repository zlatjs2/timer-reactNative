import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from "react-native";
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import HomeContainer from './containers/HomeContainer';
import ClockContainer from './containers/ClockContainer';
import SettingsContainer from './containers/SettingsContainer';
import AlarmContainer from "./containers/AlarmContainer";

const Stack2 = createStackNavigator({
  "1": {
    screen: () =>  <ClockContainer />,
    navigationOptions: {
      title: '시계'
    }
  }
});


const Stack1 = createStackNavigator({
  '2': {
    screen: () => <AlarmContainer />,
    navigationOptions: {
      title: '알람',
      headerRight: (
        <Button
          onPress={() => alert('이렇게 쓸수도 있어요!')}
          title="search"
        />
      ),
    }
  }
})

const Stack3 = createStackNavigator({
  '3': {
    screen: () => <SettingsContainer />,
    navigationOptions: {
      title: '샘플'
    }
  },
})

const AppNavigator = createBottomTabNavigator(
  {
    시계: {
      screen: Stack1
    },
    알람: {
      screen: Stack2
    },
    샘플: {
      screen: Stack3
      // navigationOptions: {
      //   tabBarVisible: false
      // }
    }
  }
);

// AppNavigator.navigationOptions = ({ navigation }) => {
//   let { routeName } = navigation.state.routes[navigation.state.index];

//   let headerTitle = routeName;

//   return {
//     headerTitle
//   };
// };

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
});

export default App;
