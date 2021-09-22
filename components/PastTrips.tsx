import React, { useContext } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { Button, Spinner } from 'native-base';
import { dataStore } from '../providers/Data';
import {
	useFonts,
	Oxygen_300Light,
	Oxygen_400Regular,
	Oxygen_700Bold,
} from '@expo-google-fonts/oxygen';

const PastTrips = () => {
	const { isLoggedIn, user } = useContext(dataStore);
	const pastTrips =  user.pastTrips;
	const [fontsLoaded] = useFonts({
		Oxygen_300Light,
		Oxygen_400Regular,
		Oxygen_700Bold,
	});

	const Item = ({ country, dateGoing, dateReturning }) => (
		<View style={styles.pastTrips}>
			<Text style={styles.text}>
				<Ionicons name='airplane' size={15} />
				{'    ' + country[0].toUpperCase() + country.slice(1)}
			</Text>
			<Text>
				<Ionicons name='time' size={15} />
				{'     ' + dateGoing.slice(8,10) + '-' + dateGoing.slice(5,7) + '-' + dateGoing.slice(0,4) + ' -> ' + dateReturning.slice(8,10) + '-' + dateReturning.slice(5,7) + '-' + dateReturning.slice(0,4)}
			</Text>
		</View>
	);

	const renderItem = ({ item }) => <Item country={item.country} dateGoing={item.dateGoing} dateReturning={item.dateReturning} />;

        if(!isLoggedIn) return null;

	return (
		<View style={styles.container}>
			<Text
				style={{
					textAlign: 'center',
					margin: 10,
					fontSize: 20,
					fontWeight: 'bold',
					fontFamily: 'Oxygen_700Bold',
				}}
			>
				Past Trips:
			</Text>
			<FlatList data={pastTrips} renderItem={renderItem} keyExtractor={(item) => item.country} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		width: 350,
		margin: 20,
		padding: 20,
	},
	text: {
		fontFamily: 'Oxygen_700Bold',
		margin: 5,
	},
	pastTrips: {
		fontFamily: 'Oxygen_700Bold',
		margin: 15,
	},
});

export default PastTrips;
