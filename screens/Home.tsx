// react imports
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import Logo from '../components/Logo';
// file imports
import CountryPicker from '../navigation/CountryPicker';

const Home = (props: any) => {
	const nav = props.navigation;

	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<Logo />
				<Text style={styles.text}>
					Up-to-date travel information for 31 countries in Europe
				</Text>
				<TouchableHighlight onPress={() => nav.navigate('Trips')}>
					<Text style={styles.button}>My Trips</Text>
				</TouchableHighlight>
				<CountryPicker nav={nav} />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		textAlign: 'center',
		alignItems: 'center',
		backgroundColor: '#DCEFF9',
	},
	content: {
		display: 'flex',
		alignItems: 'center',
	},
	text: {
		marginTop: 100,
		marginBottom: 10,
		fontSize: 15,
	},
	button: {
		width: 125,
		paddingTop: 20,
		paddingBottom: 20,
		color: '#fff',
		textAlign: 'center',
		backgroundColor: '#5c98C0',
		borderRadius: 10,
	},
});

export default Home;
