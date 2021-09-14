// react imports
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
// file imports
import Dropdown from '../navigation/Dropdown';

const Home = ({ navigation }) => {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<Text>The Covid-19 Travel App Name</Text>
				<Button
					title='My Trips'
					onPress={() => navigation.navigate('Trips')}
				/>
				<Dropdown />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Home;
