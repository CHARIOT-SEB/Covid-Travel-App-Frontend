import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const PastTrips = () => {
	// temporary past trips data
	const pastTrips = [
		{ country: 'France', dateArrived: '2020-7-1' },
		{ country: 'Croatia', dateArrived: '2021-2-13' },
		{ country: 'Poland', dateArrived: '2021-2-13' },
		{ country: 'Spain', dateArrived: '2021-2-13' },
		{ country: 'Switzerland', dateArrived: '2021-2-13' },
		{ country: 'Germany', dateArrived: '2021-2-13' },
	];

	const Item = ({ country, date }) => (
		<View style={styles.pastTrips}>
			<Text style={{marginBottom: 5,}}>
				<Ionicons name='airplane' size={15}/>
				{'     ' + country}
			</Text>
			<Text>
				<Ionicons name='time' size={15}/>
				{'     ' + date}
			</Text>
		</View>
	);

	const renderItem = ({ item }) => <Item country={item.country} date={item.dateArrived} />;

	return (
		<View style={styles.container}>
			<Text style={{ textAlign: 'center', margin: 10, fontSize: 20, fontWeight: 'bold' }}>Past Trips</Text>
			<FlatList data={pastTrips} renderItem={renderItem} keyExtractor={(item) => item.country} />
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
	pastTrips: {
		margin: 15,
	},
});

export default PastTrips;
