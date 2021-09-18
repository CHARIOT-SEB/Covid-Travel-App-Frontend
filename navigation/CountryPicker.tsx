// See https://www.npmjs.com/package/@react-native-picker/picker for more information

import 'react-native-gesture-handler';

import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import { Picker } from '@react-native-picker/picker';

function CountryPicker(props: any) {
	const nav: any = props.nav;
	const [country, setCountry] = useState('');
	const [countries, setCountries] = useState([
		'Austria',
		'Belgium',
		'Bulgaria',
		'Croatia',
		'Cyprus',
		'czechRepublic',
		'Denmark',
		'Estonia',
		'Finland',
		'France',
	]);

	console.log(country);

	return (
		<View style={styles.screen}>
			<Text style={styles.text}>See COVID Travel information by country</Text>
			<Picker
				selectedValue={country}
				onValueChange={(value, index) => setCountry(value)}
				mode='dropdown' // Android only
				style={styles.picker}
			>
				<Picker.Item label='Please choose a country' value='Unknown' />
				{countries.map(country => {
					return <Picker.Item key={country} label={country} value={country} />;
				})}
			</Picker>
			<Button title='Go' onPress={() => nav.navigate('Country', country)} />
		</View>
	);
}

export default CountryPicker;

// Some default styles
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'lightblue',
	},
	text: {
		fontSize: 24,
	},
	picker: {
		marginVertical: 30,
		width: 300,
		padding: 10,
		borderWidth: 1,
		borderColor: '#666',
	},
});
