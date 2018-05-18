import React from 'react';
import { Button } from 'react-native';

const ControlButton = ({ onChangeColor }) => {
  return (
    <Button
      onPress={onChangeColor}
      title="change color!"
      color="#fff"
      accessibilityLabel="Learn more about this purple button"
    />
  );
};

export default ControlButton;
