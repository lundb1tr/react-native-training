import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ColorCounter = ({ title, color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Button title={`Increase ${color}`} onPress={() => onIncrease()} />
      <Text>&nbsp;</Text>
      <Button title={`Decrease ${color}`} onPress={() => onDecrease()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
