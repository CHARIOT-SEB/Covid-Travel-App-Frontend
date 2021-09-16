import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Logo = () => {
	return (
		<View style={styles.logoContainer}>
			<Text style={styles.logo}>L O G O</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	logo: {
		textAlign: 'center',
	},
	logoContainer: {
		margin: 20,
		padding: 20,
		backgroundColor: '#4d94ff',
		borderRadius: 15,
	},
});

export default Logo;
