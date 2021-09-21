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
	const { isLoading, setIsLoading } = useContext(dataStore);

	const [fontsLoaded] = useFonts({
		Oxygen_300Light,
		Oxygen_400Regular,
		Oxygen_700Bold,
	});

	{
		if (isLoading || !fontsLoaded) return <Spinner color='#0aa33a' />;
	}
	return (
		<View style={styles.accountInfoContainer}>
			<Text style={styles.text}>
				<Ionicons name={'md-person'} size={15} /> Joe Blogs
			</Text>
			<Text style={styles.text}>
				<Ionicons name={'md-mail'} size={15} /> joe@blogs.com
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
