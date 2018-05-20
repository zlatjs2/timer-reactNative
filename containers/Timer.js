import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ControlButton from './components/ControlButton';

class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [
        '#FF9800',
        '#00BCD4',
        '#795548',
        '#607D8B',
        '#212121',
        '#1B5E20'
      ],
      time: new Date(),
      number: 0
    };
  }

  componentDidMount() {
    setInterval(this.setTime, 1000);
  }

  setTime = () => {
    this.setState({
      time: new Date()
    });
  }

  getRandomNumber = () => {
    const { colors } = this.state;
    const max = colors.length - 1;

    return Math.floor(Math.random() * (max - 0 + 1)) + 0;
  }

  onChangeColor = () => {
    this.setState({
      number: this.getRandomNumber()
    });
  }

  render() {
    const { colors, number, time } = this.state;
    const hours = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: colors[number]
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
        fontSize: 80,
        color: '#fff'
      }
    });

    return (
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.time}>
            {hours}
            :
            {min < 10 ? `0${min}` : `${min}`}
            :
            {sec < 10 ? `0${sec}` : `${sec}`}
          </Text>
        </View>
        <View style={styles.bottom}>
          <ControlButton onChangeColor={this.onChangeColor} />
        </View>
      </View>
    );
  }
}

export default Timer;
