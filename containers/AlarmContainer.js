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
} from "react-native";

class AlarmContainer extends Component {
  state = {
    type: "",
    hour: "",
    min: "",
    date: new Date(),
    items: []
  };

  componentDidMount() {
    setInterval(this.setDate, 1000);
  }

  setDate = () => {
    this.setState({
      date: new Date()
    });
  };

  onChangeType = type => {
    this.setState({
      type
    });
  };

  onChangeHour = hour => {
    this.setState({
      hour
    });
  };

  onChangeMin = min => {
    this.setState({
      min
    });
  };

  onCreate = () => {
    const { date, items, type, hour, min } = this.state;

    this.setState({
      items: items.concat({
        title: "알람 테스트",
        type: type,
        hour: hour,
        minute: min
      })
    });
  };

  onRemove = () => {};

  render() {
    const { date, items, type, hour, min } = this.state;
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return (
      <View style={styles.container}>
        <View style={styles.timeBox}>
          <Text style={styles.boxItem}>
            {hours >= 12 ? "오후" : "오전"}
          </Text>
          <Text style={[styles.boxItem, styles.time]}>
            {hours >= 12 ? `0${hours - 12}` : hours}
            :
            {minutes < 10 ? `0${minutes}` : minutes}
          </Text>
        </View>
        <View style={styles.timeOption}>
          <View style={styles.optionItem}>
            <Picker selectedValue={type} onValueChange={this.onChangeType}>
              <Picker.Item label="오전" value="오전" />
              <Picker.Item label="오후" value="오후" />
            </Picker>
          </View>
          <View style={[styles.optionItem, styles.optionHours]}>
            <Picker selectedValue={hour} onValueChange={this.onChangeHour}>
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="3" value="3" />
              <Picker.Item label="4" value="4" />
              <Picker.Item label="5" value="5" />
              <Picker.Item label="6" value="6" />
            </Picker>
          </View>
          <View style={[styles.optionItem, styles.optionMins]}>
            <Picker selectedValue={min} onValueChange={this.onChangeMin}>
              <Picker.Item label="5" value="5" />
              <Picker.Item label="10" value="10" />
              <Picker.Item label="15" value="15" />
              <Picker.Item label="20" value="20" />
              <Picker.Item label="25" value="25" />
              <Picker.Item label="30" value="30" />
            </Picker>
          </View>
        </View>
        <View style={styles.inputField}>
          <TextInput style={styles.input} />
        </View>
        <Text>
          {/* 
            현재시간 - 알람 = 남은 시간 
            남은 시간이 0 이라면 알람을 알려주는 함수 실행
          */}
        </Text>
        {items.length === 0 ?
          <View style={styles.emptyBox}>
            <Text style={styles.text}>
              추가된 알람이 없습니다.
            </Text>
            <TouchableOpacity
              onPress={this.onCreate}
              style={styles.createButton}>
            >
              <Text>Create Alarm</Text>
            </TouchableOpacity>
          </View>
          :
          <FlatList data={items} renderItem={({ item, idx }) => 
          <View key={idx}>
            <Text>{item.title}</Text>
            <Text>{item.type}</Text>
            <Text>{item.hour}</Text>
            <Text>{item.minute}</Text>
          </View>} />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFC107"
  },
  timeBox: {
    height: 120,
    alignItems: "center",
    backgroundColor: 'gray'
  },
  boxItem: {
    flex: 1,
    color: "#fff",
    fontSize: 22
  },
  time: {
    fontSize: 50
  },
  timeOption: {
    flexDirection: "row"
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
    backgroundColor: "#fff"
  },
  emptyBox: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  createButton: {
    width: '100%',
    height: 44,
    borderRadius: 4,
    backgroundColor: "#795548",
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    color: "#fff",
    fontSize: 14,
    padding: 20,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default AlarmContainer;
