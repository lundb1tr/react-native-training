import React, { useReducer } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const COLOR_INCREMENT = 15;

const reducer = (state, { type, payload }) => {
  /* state = { red: #, green: #, blue: # } */
  /* type = action to take */
  /* payload = how much we will change the color by */
  const colorToChange = type.replace('change_', '');
  const colorObj = { ...state };
  if (payload > 0 && payload + state[colorToChange] > 255) {
    colorObj[colorToChange] = 255;
  } else if (payload < 0 && payload + state[colorToChange] < 0) {
    colorObj[colorToChange] = 0;
  } else {
    colorObj[colorToChange] = state[colorToChange] + payload;
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
          dispatch({ type: 'change_red', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_red', payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        title={`Green - ${green}`}
        color="Green"
        onIncrease={() =>
          dispatch({ type: 'change_green', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_green', payload: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        title={`Blue - ${blue}`}
        color="Blue"
        onIncrease={() =>
          dispatch({ type: 'change_blue', payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREMENT })
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
