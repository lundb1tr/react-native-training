import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const INCREMENT_AMOUNT = 20;
const reducer = (state, { type, payload }) => {
  /* state = { counter: # } */
  /* type = increment || decrement */
  /* payload = # to add to counter */
  const stateObj = { ...state };
  if (type === 'increment' && stateObj.counter + payload > 100) {
    stateObj.counter = 100;
  } else if (type === 'decrement' && stateObj.counter + payload < 0) {
    stateObj.counter = 0;
  } else {
    stateObj.counter = stateObj.counter + payload;
  }
  return stateObj;
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;
  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          dispatch({ type: 'increment', payload: INCREMENT_AMOUNT });
        }}
      />
      <Text>&nbsp;</Text>
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: 'decrement', payload: -1 * INCREMENT_AMOUNT });
        }}
      />
      <Text>&nbsp;</Text>
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
