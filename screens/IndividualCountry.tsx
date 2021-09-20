import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import geoLocations from './geoLocations/geoLocations.json';
import { getCountry } from '../screens/api';

interface State {
	latitude: number;
	longitude: number;
	latitudeDelta: number;
	longitudeDelta: number;
}

const IndividualCountry = (country: { route: { params: string } }) => {
	const [info, setInfo] = useState({});
	const [region, setRegion] = useState({
		latitude: 47.4256,
		longitude: 2.6054,
		latitudeDelta: 10,
		longitudeDelta: 0.25,
	});

	let newGeo = {
		latitude: 0,
		longitude: 0,
		latitudeDelta: 0,
		longitudeDelta: 0,
	};

	let mapArea = country.route.params;
	const searchParam = mapArea[0].toLowerCase() + mapArea.slice(1);
	console.log(searchParam);

	const geo = Object.entries(geoLocations).find(arr => {
		if (arr[0] === mapArea) {
			newGeo.latitude = arr[1].latitude;
			newGeo.longitude = arr[1].longitude;
			newGeo.latitudeDelta = arr[1].latitudeDelta;
			newGeo.longitudeDelta = arr[1].longitudeDelta;
			return;
		}
	});

	useEffect(() => {
		getCountry(searchParam).then((country: object) => {
			console.log(country);
			setInfo(country);
		});
		setRegion(newGeo);
	}, [country]);

	//   console.log(geoLocations.Denmark);

	return (
		<SafeAreaView>
			<View style={styles.container}>
				<MapView
					style={styles.map}
					showsUserLocation={true}
					region={region}
					// user location will be available to see, if location services are enabled
				/>
				<View style={styles.container}></View>
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
	map: {
		alignSelf: 'center',
		width: 370,
		height: 500,

		alignItems: 'center',
		borderWidth: 3,
		borderColor: '#ddd',
		borderRadius: 6,
	},
	logo: {
		flex: 1,
		height: 20,
		padding: 20,
		margin: 10,
		borderRadius: 80,
		alignItems: 'stretch',
		backgroundColor: '#5f9ea0',
	},
	countryTitle: {
		height: 5,
		margin: 20,
		padding: 20,
		width: 70,
		backgroundColor: '#ff7f50',
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	heatMapContainer: {
		flex: 3,
		flexDirection: 'row',
		margin: 25,
		height: 20,
		alignItems: 'stretch',
		alignSelf: 'stretch',
		padding: 50,
		backgroundColor: '#fff8dc',
		justifyContent: 'center',
	},
	heatMap: {
		flexDirection: 'row',
		margin: 10,
		color: '#000000',
		alignItems: 'center',
		justifyContent: 'center',
	},
	countryInfoContainer: {
		backgroundColor: '#fff8dc',
		flex: 4,
		flexDirection: 'column',
		alignSelf: 'stretch',
		margin: 25,
		height: 20,
		padding: 50,
	},
	info: {
		margin: 2,
		alignSelf: 'center',
	},
	text: {},
});

export default IndividualCountry;
