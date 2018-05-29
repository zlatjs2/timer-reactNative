import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

class SettingsContainer extends Component {
  static navigationOptions = {
    title: '샘플',
    headerRight: (
      <Button
        onPress={() => alert('이케 상단에 따로 버튼을 넣을수가 있어요')}
        title="search"
        color="#222"
      />
    )
  };

  render() {
    return (
      <View>
        <Text>
          SettingsContainer
        </Text>
      </View>
    )
  }
};

export default SettingsContainer;
