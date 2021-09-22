import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Spinner } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
	useFonts,
	Oxygen_300Light,
	Oxygen_400Regular,
	Oxygen_700Bold,
} from '@expo-google-fonts/oxygen';
import { dataStore } from '../providers/Data';

const AccountInfo = () => {
	const { isLoggedIn, user } = useContext(dataStore);

	const [fontsLoaded] = useFonts({
		Oxygen_300Light,
		Oxygen_400Regular,
		Oxygen_700Bold,
	});
    console.log(user);

    if(!isLoggedIn) return null;
	
	return (
		<View style={styles.accountInfoContainer}>
			<Text style={styles.text}>
				<Ionicons name={'md-person'} size={15} /> {user.name}
			</Text>
			<Text style={styles.text}>
				<Ionicons name={'md-mail'} size={15} /> {user.email}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	accountInfoContainer: {
		margin: 20,
		padding: 20,
		borderRadius: 10,
	},
	text: {
		fontFamily: 'Oxygen_700Bold',
		textAlign: 'left',
		margin: 5,
		fontSize: 15,
	},
});

export default AccountInfo;
