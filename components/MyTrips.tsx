import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyTrips = () => {
	return (
		<View style={styles.container}>
			<Text style={{ textAlign: 'center', margin: 10, }}>Past Trips</Text>
			<View style={styles.info}>
				<Text>France</Text>
			</View>
			<View style={styles.info}>
				<Text>Croatia</Text>
			</View>
			<View style={styles.info}>
				<Text>Poland</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		margin: 20,
		padding: 20,
		backgroundColor: '#4d94ff',
		borderRadius: 15,
	},
	info: {
		margin: 2,
		alignSelf: 'center',
		padding: 20,
		backgroundColor: '#66b2ff',
		borderRadius: 15,
	},
});

export default MyTrips;
