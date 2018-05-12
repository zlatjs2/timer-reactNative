import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ControlButton from './components/ControlButton';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: '#FF9800'
    }
  }

  onChangeTheme = () => {
    alert('You tapped the button!');
  }
  render() {
    const { colors } = this.state;
    console.log('# colors', colors);
    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.time}>20:00</Text>
        </View>
        <View style={styles.bottom}>
          <ControlButton
            onChangeTheme={this.onChangeTheme}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF9800'
  },
  content: {
    flex: 2,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  bottom: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  time: {
    fontSize: 100,
    color: '#fff'
  }
});

export default Timer;
