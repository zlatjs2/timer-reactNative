import React from "react";
import { StyleSheet, View, TouchableHighlight, Text } from "react-native";

const styles = StyleSheet.create({
  palette: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 1,
    top: 0,
    right: 10,
    width: 100,
    height: 100,
    padding: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.8)'
  }
});

const Palette = ({ colors, onSelectColor }) => {
  return (
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
            onPress={() => onSelectColor(color)}
          >
            <View style={styles} />
          </TouchableHighlight>
        );
      })}
    </View>
  );
};

export default Palette;
