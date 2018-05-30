import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Time from '../components/Time';
import ControlButton from '../components/ControlButton';


class ClockContainer extends Component {
  state = {
    colors: [ '#F44336', '#673AB7', '#03A9F4', '#1B5E20', '#FFC107', '#795548', '#212121', '#607D8B', '#009688' ],
    time: new Date(),
    number: 0,
    bgColor: '#F44336',
    isPalette: false
  };

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

  togglePalette = () => {
    const { isPalette } = this.state;

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
    const { colors, number, time, isPalette, bgColor } = this.state;
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
      palette: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        position: 'absolute',
        zIndex: 1,
        top: 44,
        right: 10,
        width: 100,
        height: 100,
        padding: 3,
        backgroundColor: 'rgba(255, 255, 255, 0.8)'
      },
      content: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center'
      },
      time: {
        fontSize: 80,
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
    const myIcon = (<Icon name="paint-brush" size={16} color="#fff" />)

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableHighlight
            onPress={this.togglePalette}
          >
            <Text style={styles.icon}>{myIcon}</Text>
            <Animated.View
              style={{
                transform: [
                {scale: this.state.scale},
                {rotateY: this.state.rotateY},
                {perspective: 1000}, // without this line this Animation will not render on Android while working fine on iOS
                ],
              }}
            />
          </TouchableHighlight>
          {isPalette ?
            <View style={styles.palette}>
              {colors.map((color, idx) => {
                const styles = {
                  width: 25,
                  height: 25,
                  borderRadius: 3,
                  margin: 3,
                  backgroundColor: color
                };
                return (
                  <TouchableHighlight
                    id={idx}
                    key={idx}
                    onPress={() => this.onSelectColor(color)}
                  >
                    <View style={styles} />
                  </TouchableHighlight>
                );
              })}
            </View>
          :
            null
          }
        </View>
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
          {/* <ControlButton onChangeColor={this.onChangeColor} /> */}
          <Text style={styles.text}>:)</Text>
        </View>
      </View>
    );
  }
}

export default ClockContainer;
