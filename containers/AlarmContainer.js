import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Picker,
  TextInput,
  FlatList,
  TouchableOpacity
} from 'react-native';

class AlarmContainer extends Component {
  state = {
    date: new Date(),
    myHour: null,
    myMinute: null,
    mySecond: null,
    test: '',
    beforeMillisecond: '',
    afterMillisecond: ''
  };

  componentDidMount() {
    setInterval(this.setDate, 1000);
  }

  setDate = () => this.setState({ date: new Date() });

  setAlarm = totalMilliseconds => {
    // alert(totalMilliseconds);
    setTimeout(() => {
      alert('띠리리리리리링!!!!');
    }, totalMilliseconds);
  };

  render() {
    const {
      date,
      myHour,
      myMinute,
      mySecond,
      test,
      beforeMillisecond,
      afterMillisecond
    } = this.state;
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const rHour = myHour * 3600 - hours * 3600;
    const rMinute = myMinute * 60 - minutes * 60;
    const totalMilliseconds = rHour + rMinute;

    return (
      <View style={styles.container}>
        <View style={styles.timeBox}>
          <Text style={styles.boxItem}>{hours >= 12 ? '오후' : '오전'}</Text>
          <Text style={[styles.boxItem, styles.time]}>
            {hours > 12 ? `0${hours - 12}` : hours}
            :
            {minutes < 10 ? `0${minutes}` : minutes}
            :
            {seconds < 10 ? `0${seconds}` : seconds}
          </Text>
        </View>

        <View style={styles.optionBox}>
          <View style={styles.options}>
            <View style={styles.optionItem}>
              <View style={styles.inputField}>
                <TextInput
                  style={styles.input}
                  placeholder="시"
                  onChangeText={text => this.setState({ myHour: text })}
                />
              </View>
            </View>
            <View style={styles.optionItem}>
              20
              <View style={styles.inputField}>
                <TextInput
                  style={styles.input}
                  placeholder="분"
                  onChangeText={text => this.setState({ myMinute: text })}
                />
              </View>
            </View>
            <View style={styles.optionItem}>
              <View style={styles.inputField}>
                <TextInput
                  style={styles.input}
                  placeholder="초"
                  onChangeText={text => this.setState({ mySecond: text })}
                />
              </View>
            </View>
          </View>
          <View style={styles.emptyBox}>
            <TouchableOpacity
              onPress={() => this.setAlarm(totalMilliseconds)}
              style={styles.createButton}
            >
              >
              <Text>Set Alarm</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text>
            알람: {myHour} 시 {myMinute} 분 {mySecond} 초
          </Text>
          <Text>
            초: {myHour} / {myHour * 3600 - hours * 3600}
          </Text>
          <Text>
            분: {myMinute} / {myMinute * 60 - minutes * 60}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFC107'
  },
  timeBox: {
    flex: 1,
    alignItems: 'center'
  },
  boxItem: {
    marginTop: 15,
    height: 30,
    color: '#fff',
    fontSize: 22
  },
  time: {
    flex: 1,
    fontSize: 50
  },
  optionBox: {
    flex: 3
  },
  options: {
    flex: 1,
    flexDirection: 'row'
    // backgroundColor: 'blue'
  },
  optionItem: {
    flex: 2
  },
  optionHours: {
    flex: 1
  },
  optionMins: {
    flex: 1
  },
  inputField: {
    padding: 10
  },
  input: {
    padding: 15,
    backgroundColor: '#fff'
  },
  emptyBox: {
    flex: 1,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  createButton: {
    width: '100%',
    height: 44,
    borderRadius: 4,
    backgroundColor: '#795548',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 14,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default AlarmContainer;
