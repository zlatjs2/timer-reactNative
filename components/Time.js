import React from 'react';
import { StyleSheet, Text } from 'react-native';

const styles = StyleSheet.create({
  time: {
    fontSize: 80,
    color: '#fff'
  }
});


const Time = ({ hours, min, sec }) => (
  <Text style={styles.time}>
    {hours < 12 ? `am ${hours}` : `pm ${hours - 12}`}
    :
    {min < 10 ? `0${min}` : `${min}`}
    :
    {sec < 10 ? `0${sec}` : `${sec}`}
  </Text>
);

export default Time;
