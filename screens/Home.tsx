// react imports
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
import Logo from '../components/Logo';
// file imports
import CountryPicker from '../navigation/CountryPicker';

const Home = (props: any) => {
	const nav = props.navigation;

	return (
		<SafeAreaView style={styles.container}>
			<Text>Coroamer</Text>
			<View>
				<Logo />
				<Button title='My Trips' onPress={() => nav.navigate('Trips')} />
				<CountryPicker nav={nav} />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'rgb(153, 153, 230)',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Home;
