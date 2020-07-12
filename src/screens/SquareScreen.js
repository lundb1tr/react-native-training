import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ColorCounter from '../Components/ColorCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
	const [red, setRed] = useState(0);
	const [blue, setBlue] = useState(0);
	const [green, setGreen] = useState(0);

	return (
		<View>
			<ColorCounter
				title={`Red - ${red}`}
				color="Red" 
				onIncrease={() => setRed(red + COLOR_INCREMENT)} 
				onDecrease={() => setRed(red - COLOR_INCREMENT)}
				/>
			<ColorCounter
				title={`Blue - ${blue}`}
				color="Blue" 
				onIncrease={() => setBlue(blue + COLOR_INCREMENT)} 
				onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
				/>
			<ColorCounter
				title={`Green - ${green}`}
				color="Green" 
				onIncrease={() => setGreen(green + COLOR_INCREMENT)} 
				onDecrease={() => setGreen(green - COLOR_INCREMENT)}
			/>
			<View 
				style={{ 
						height: 150, 
						width: 150, 
						backgroundColor: `rgb(${red}, ${green}, ${blue})`}}
				/>
		</View>
	)
}

const styles = StyleSheet.create({});

export default SquareScreen;