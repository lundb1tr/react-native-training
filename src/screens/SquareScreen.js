import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [blue, setBlue] = useState(0);
  const [green, setGreen] = useState(0);

  const setColor = (value, fn, increase) => {
    if (increase) {
      /* If increase is true check increment logic */
      return value + COLOR_INCREMENT > 255
        ? fn(255)
        : fn(value + COLOR_INCREMENT);
    } else {
      /* If increase is false check decrement logic */
      return value - COLOR_INCREMENT < 0 ? fn(0) : fn(value - COLOR_INCREMENT);
    }
  };

  return (
    <View>
      <ColorCounter
        title={`Red - ${red}`}
        color="Red"
        onIncrease={() => setColor(red, setRed, true)}
        onDecrease={() => setColor(red, setRed, false)}
      />
      <ColorCounter
        title={`Blue - ${blue}`}
        color="Blue"
        onIncrease={() => setColor(blue, setBlue, true)}
        onDecrease={() => setColor(blue, setBlue, false)}
      />
      <ColorCounter
        title={`Green - ${green}`}
        color="Green"
        onIncrease={() => setColor(green, setGreen, true)}
        onDecrease={() => setColor(green, setGreen, false)}
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
