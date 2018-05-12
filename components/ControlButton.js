import React from 'react';
import { StyleSheet, Button } from 'react-native';

const styles = StyleSheet.create({
  button: {}
});

const ControlButton = ({ onChangeTheme }) => {
  return (
    <Button
      onPress={onChangeTheme}
      title="change theme!"
      color="#fff"
      accessibilityLabel="Learn more about this purple button"
    />
  );
};

export default ControlButton;
