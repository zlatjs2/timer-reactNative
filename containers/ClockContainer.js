import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Button } from 'react-native';
import Time from '../components/Time';
import ControlButton from '../components/ControlButton';

class ClockContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [ '#F44336', '#673AB7', '#03A9F4', '#1B5E20', '#FFC107', '#795548', '#212121', '#607D8B', '#009688' ],
      time: new Date(),
      number: 0,
      isPalette: false
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

  togglePalette = () => {
    const { isPalette } = this.state;

    this.setState({
      isPalette: !isPalette
    });
  }

  onSelectColor = (idx) => {
    // alert('# Event!', idx);
    this.setState({
      number: idx
    });
  }

  render() {
    const { colors, number, time, isPalette } = this.state;
    const hours = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: colors[number]
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
        fontSize: 10
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
        fontSize: 20,
        color: '#fff'
      },
      bottom: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    });

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableHighlight
            onPress={this.togglePalette}
          >
            <Text>Show</Text>
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
                    onPress={(idx) => this.onSelectColor(3) }
                    key={idx}
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
          <ControlButton onChangeColor={this.onChangeColor} />
        </View>
      </View>
    );
  }
}

export default ClockContainer;
