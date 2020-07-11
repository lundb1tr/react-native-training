import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
	const [counter, setCounter] = useState(0);
	return (
		<View>
			<Button title="Increase" onPress={() => {
				setCounter(counter + 1);
			}}/>
      <Text>&nbsp;</Text>
			<Button title="Decrease" onPress={() => {
				setCounter(counter - 1);
			}}/>
      <Text>&nbsp;</Text>
			<Text>Current Count: {counter}</Text>
			</View>
			);
};

const styles = StyleSheet.create({});

export default CounterScreen;