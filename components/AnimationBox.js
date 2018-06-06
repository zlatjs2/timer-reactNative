import React, { Component } from 'react';
import { View, StyleSheet, Animated, Dimensions, Button } from 'react-native';

const SQUARE_H = 100;
const SQUARE_W = 100;
const WINDOW_H = Dimensions.get('window').height;
const WINDOW_W = Dimensions.get('window').width;

class AnimationBox extends Component {
  state = {
    value: new Animated.Value(0),
  }

  componentWillMount () {
    this.translateX = this.state.value.interpolate({
      inputRange: [0, 0],
      outputRange: [0, 50]
    });

    this.rotate = this.state.value.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '0deg'],
    })
  }

  componentDidMount () {
    Animated.timing(this.state.value, {
      duration: 1000,
      toValue: 1,
      delay: 200,
    }).start();
  }

  getTransform () {
    return {
      transform: [
        {translateY: this.translateX},
        {rotate: this.rotate}
      ]
    }
  }

  render () {
    const { children } = this.props;

    return (
      <Animated.View style={this.getTransform()}>
        {children}
      </Animated.View>
    )
  }
}

export default AnimationBox;
