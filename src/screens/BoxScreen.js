import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentStyle: {
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewOneStyle: {
    borderWidth: 3,
    borderColor: 'red',
    backgroundColor: 'red',
    opacity: 80,
    height: 80,
    width: 80,
    borderRadius: 5,
  },
  viewTwoStyle: {
    borderWidth: 3,
    borderColor: 'green',
    backgroundColor: 'green',
    opacity: 80,
    fontSize: 18,
    borderRadius: 5,
    height: 80,
    width: 80,
    top: 80,
  },
  viewThreeStyle: {
    borderWidth: 3,
    borderColor: 'purple',
    backgroundColor: 'purple',
    opacity: 80,
    height: 80,
    width: 80,
    borderRadius: 5,
  },
});

export default BoxScreen;
