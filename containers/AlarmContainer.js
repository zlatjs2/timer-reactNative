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
    options: {
      type: '오전',
      hour: 1,
      minute: 00
    },
    items: [
      {
        title: '알람1',
        hour: 22,
        minute: 45,
        seconds: 20
      }
    ]
  };

  componentDidMount() {
    setInterval(this.setDate, 1000);
  }

  setDate = () => this.setState({ date: new Date() });

  setAlarm = () => alert('띠용띠용!');

  onChangeType = type => this.setState({ options: { type: type } });

  onChangeHour = hour => this.setState({ options: { hour: hour } });

  onChangeMin = minute => this.setState({ options: { minute: minute } });

  onCreate = () => {
    const { items, options } = this.state;

    this.setState({
      items: items.concat({
        title: '알람 테스트',
        type: options.type,
        hour: options.hour,
        minute: options.min
      })
    });
  };

  render() {
    const { date, items, options } = this.state;
    const { type, hour, min } = options;
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const optionHours = ['1', '2', '3', '4', '5', '6'];
    const optionMinutes = ['00', '10', '20', '30', '40', '50'];

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
            {/*
            <View style={styles.optionItem}>
              <View style={styles.inputField}>
                <TextInput
                  style={styles.input}
                  placeholder="시"
                  // onChangeText={(text) => this.setState({ text })}
                />
              </View>
            </View>
            <View style={styles.optionItem}>
              <View style={styles.inputField}>
                <TextInput
                  style={styles.input}
                  placeholder="분"
                // onChangeText={(text) => this.setState({ text })}
                />
              </View>
            </View>
            <View style={styles.optionItem}>
              <View style={styles.inputField}>
                <TextInput
                  style={styles.input}
                  placeholder="초"
                // onChangeText={(text) => this.setState({ text })}
                />
              </View>
            </View>
          */}

            <View style={styles.optionItem}>
              <Picker
                selectedValue={options.type}
                onValueChange={this.onChangeType}
              >
                <Picker.Item label="오전" value="오전" />
                <Picker.Item label="오후" value="오후" />
              </Picker>
            </View>
            <View style={[styles.optionItem, styles.optionHours]}>
              <Picker
                selectedValue={options.hour}
                onValueChange={this.onChangeHour}
              >
                {optionHours.map((option, idx) => 
                  <Picker.Item label={option} value={option} /> 
                )}
              </Picker>
            </View>
            <View style={[styles.optionItem, styles.optionMins]}>
              <Picker
                selectedValue={options.minute}
                onValueChange={this.onChangeMin}
              >
                {optionMinutes.map((option, idx) =>
                  <Picker.Item label={option} value={option} />
                )}
              </Picker>
            </View>
          </View>
        </View>
        {items.length === 0 ? (
          <View style={styles.emptyBox}>
            <Text style={styles.text}>추가된 알람이 없습니다.</Text>
            <TouchableOpacity
              onPress={this.onCreate}
              style={styles.createButton}
            >
              >
              <Text>Create Alarm</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <FlatList
            data={items}
            renderItem={({ item, idx }) => (
              <View key={idx}>
                <View>
                  <Text>
                    알람: {item.hour} 시 {item.minute} 분 {item.seconds} 초
                  </Text>
                  <Text>
                    현재시간: {hours} 시 {minutes} 분 {seconds} 초
                  </Text>
                  <Text>
                    남은시간: {item.hour - hours} 시 {item.minute - minutes} 분 {item.seconds - seconds} 초
                  </Text>
                </View>
              </View>
            )}
          />
        )}
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
