// See https://www.npmjs.com/package/@react-native-picker/picker for more information

import 'react-native-gesture-handler';
// react imports

import React, { useEffect, useState, useContext } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableHighlight,
} from 'react-native';
// file imports
import { Picker } from '@react-native-picker/picker';
import { getCountries } from '../screens/api';
import { dataStore } from '../providers/Data';

function CountryPicker(props: any) {
	// destructuring each state from the dataStore to be used
	const { countryName, setCountryName } = useContext(dataStore);
	const { countries, setCountries } = useContext(dataStore);
	

	const nav: any = props.nav;

	//   set the countries from api
	useEffect(() => {
		getCountries().then((countries: any) => {
			setCountries(countries);
		});
	}, []);

	return (
		<View style={styles.screen}>
			<Text style={styles.text}>Got a destination in mind? </Text>

			<Text>Choose here...</Text>
			<Picker
				selectedValue={countryName}
				onValueChange={(value, index) => {
					setCountryName(value);
				}}
				mode='dropdown' // Android only
				style={styles.picker}
			>
				<Picker.Item label='Please choose a country' value='Unknown' />
				{countries.map((country) => {
					return <Picker.Item key={country} label={country} value={country} />;
				})}
			</Picker>
			<TouchableHighlight onPress={() => nav.navigate('Country')}>
				<Text style={styles.button}>Go</Text>
			</TouchableHighlight>
		</View>
	);
}

export default CountryPicker;

const GREY = '#9E9E9E';

// Some default styles
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	text: {
		fontSize: 24,
	},
	picker: {
		marginVertical: 30,
		width: 300,
		padding: 10,
	},
	button: {
		width: 125,
		paddingTop: 20,
		paddingBottom: 20,
		color: '#fff',
		textAlign: 'center',
		backgroundColor: '#00A676',
		borderRadius: 10,
		borderWidth: 1,
		borderColor: '#fff',
	},
});
