import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
const logo = require('../logo.png');

const Logo = () => {
	return (
		<View>
			<Image source={logo} style={{ width: 150, height: 50 }} />
		</View>
	);
};

const styles = StyleSheet.create({
	logo: {
		textAlign: 'center',
		fontSize: 22,
		fontWeight: 'bold',
	},
	logoContainer: {
		margin: 20,
		padding: 20,
		backgroundColor: '#4d94ff',
		borderRadius: 15,
	},
});

export default Logo;
