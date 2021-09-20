import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Logo = () => {
	return (
		<View style={styles.logoContainer}>
			<Text style={styles.logo}>COROAMER</Text>
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
