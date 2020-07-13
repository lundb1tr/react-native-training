import React, { useReducer } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, { colorToChange, amount }) => {
  /* state === { red: #, green: #, blue: # } */
  /* action === { colorToChange: color, amount: +/- 15 } */
  const colorObj = { ...state };
  if (amount > 0 && amount + state[colorToChange] > 255) {
    colorObj[colorToChange] = 255;
  } else if (amount < 0 && amount + state[colorToChange] < 0) {
    colorObj[colorToChange] = 0;
  } else {
    colorObj[colorToChange] = state[colorToChange] + amount;
  }
  return colorObj;
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 255,
  });
  const { red, green, blue } = state;
  return (
    <View>
      <ColorCounter
        title={`Red - ${red}`}
        color="Red"
        onIncrease={() =>
          dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        title={`Green - ${green}`}
        color="Green"
        onIncrease={() =>
          dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        title={`Blue - ${blue}`}
        color="Blue"
        onIncrease={() =>
          dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })
        }
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
