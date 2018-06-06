import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Button, Animated, Easing } from 'react-native';
import Palette from "../components/Palette";
import Time from '../components/Time';
import Icon from 'react-native-vector-icons/FontAwesome';

class ClockContainer extends Component {
  state = {
    colors: ['#F44336', '#673AB7', '#03A9F4', '#1B5E20', '#FFC107', '#795548', '#212121', '#607D8B', '#009688'],
    time: new Date(),
    bgColor: '#F44336',
    isPalette: false,
    value: new Animated.Value(0),
  };

  static navigationOptions = {
    title: '타이머'
  };

  componentWillMount () {
    this.translateY = this.state.value.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 44]
    });
  }

  componentDidMount() {
    setInterval(this.setTime, 1000);
  }

  getTransform () {
    return {
      transform: [
        {translateY: this.translateY}
      ]
    }
  }

  setTime = () => {
    this.setState({
      time: new Date()
    });
  }

  togglePalette = () => {
    const { isPalette } = this.state;

    Animated.timing(this.state.value, {
      duration: 200,
      toValue: 1,
      delay: 100,
      easing: Easing.ease
    }).start();

    this.setState({
      isPalette: !isPalette
    });
  }

  onSelectColor = (color) => {
    this.setState({
      bgColor: color,
      isPalette: false
    });
  }

  render() {
    const { colors, time, isPalette, bgColor } = this.state;
    const hours = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: bgColor
      },
      top: {
        zIndex: 1,
        height: 44,
        flexDirection: 'row',
        justifyContent: 'flex-end'
      },
      button: {
        width: 44,
        height: 44,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray',
        fontSize: 10,
      },
      icon: {
        padding: 10
      },
      content: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
      },
      time: {
        fontSize: 60,
        color: '#fff'
      },
      bottom: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      text: {
        color: '#fff'
      }
    });
    const myIcon = (<Icon name="paint-brush" size={16} color="#fff" />);

    return (
      <View style={styles.container}>
        <View style={styles.top}>

          <TouchableHighlight onPress={this.togglePalette}>
            <Text style={styles.icon}>{myIcon}</Text>
          </TouchableHighlight>
          {isPalette &&
            <Animated.View style={this.getTransform()}>
              <Palette
                colors={colors}
                onSelectColor={this.onSelectColor}
              />
            </Animated.View>
          }
        </View>
        <View style={styles.content}>
          <Time
            hours={hours}
            min={min}
            sec={sec}
          />
        </View>
        <View style={styles.bottom}>
          <Text style={styles.text}>:)</Text>
        </View>
      </View>
    );
  }
}

export default ClockContainer;
