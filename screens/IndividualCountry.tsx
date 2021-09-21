import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import geoLocations from './geoLocations/geoLocations.json';
import { getCountry } from '../screens/api';
import Logo from '../components/Logo';
import IsVaccinated from '../components/IsVaccinated';
import IsntVaccinated from '../components/IsntVaccinated';

import { Spinner } from 'native-base';
const IndividualCountry = (country: { route: { params: string } }) => {
	const [isLoading, setIsLoading] = useState(false);
	let info: any, setInfo: any;
	[info, setInfo] = useState({});
	const [region, setRegion] = useState({
		latitude: 47.4256,
		longitude: 2.6054,
		latitudeDelta: 10,
		longitudeDelta: 0.25,
	});

	let mapArea = country.route.params;

	useEffect(() => {
		setIsLoading(true);
		getCountry(mapArea)
			.then((country: any) => {
				setInfo(country);
				setRegion({
					latitude: country.geoLocation.latitude,
					longitude: country.geoLocation.longitude,
					latitudeDelta: country.geoLocation.latitudeDelta,
					longitudeDelta: country.geoLocation.longitudeDelta,
				});
			})
			.then(() => {
				setIsLoading(false);
			});
	}, [country]);

	// console.log(info.geoLocation);

	// if (!info.country) return null;

	// if (isLoading) {
	return (
		<View style={{ flex: 1, justifyContent: 'center' }}>
			<Spinner />
		</View>
	);
};

// return (
// 	<SafeAreaView>
// 		<View style={styles.container}>
// 			<Logo />
// 			<View style={styles.trafficLight}>
// 				<Text style={styles.name}>{info.country}</Text>
// 			</View>
// 			<Text>{info.colorList}</Text>
// 			<MapView
// 				style={styles.map}
// 				showsUserLocation={true}
// 				region={region}
// 				// user location will be available to see, if location services are enabled
// 			/>
// 			<IsVaccinated info={info} />
// 			<IsntVaccinated info={info} />
// 		</View>
// 	</SafeAreaView>
// );
// };

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
	trafficLight: {
		padding: 20,
		backgroundColor: '#4d94ff',
		borderRadius: 15,
	},
	name: {
		fontSize: 30,
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
	infoContainer: {
		margin: 20,
		padding: 20,
		backgroundColor: '#4d94ff',
		borderRadius: 15,
	},
	text: {
		textAlign: 'center',
		margin: 5,
		fontSize: 15,
	},
	loading: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default IndividualCountry;
