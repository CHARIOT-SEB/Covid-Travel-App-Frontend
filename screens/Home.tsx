// react imports
import React, { useContext, useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Pressable } from 'react-native';
import Logo from '../components/Logo';
// file imports
import CountryPicker from '../navigation/CountryPicker';
// google fonts
import { useFonts, Oxygen_400Regular } from '@expo-google-fonts/oxygen';
// loading base
import { Spinner } from 'native-base';
import { dataStore } from '../providers/Data';

const Home = (props: any) => {
    const {isLoggedIn} = useContext(dataStore)
	const nav = props.navigation;

	let [fontsLoaded] = useFonts({
		Oxygen_400Regular,
	});

    if(!isLoggedIn) return null;

	if (!fontsLoaded) {
		return (
			<View style={{ flex: 1, justifyContent: 'center' }}>
				<Spinner />
			</View>
		);
	}
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.content}>
				<Logo />
				<Text
					style={{
						flex: 0.15,
						fontFamily: 'Oxygen_400Regular',
						fontSize: 18,
						margin: 40,
						textAlign: 'center',
					}}
				>
					Up-to-date travel information for 31 countries in Europe
				</Text>
				<Pressable style={styles.button} onPress={() => nav.navigate('Trips')}>
					<Text
						style={{
							fontFamily: 'Oxygen_400Regular',
							fontSize: 20,
							margin: 10,
							position: 'relative',
						}}
					>
						My Trips
					</Text>
				</Pressable>
				<CountryPicker nav={nav} />
			</View>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		textAlign: 'center',
		alignItems: 'center',
		backgroundColor: '#DCEFF9',
	},
	content: {
		display: 'flex',
		alignItems: 'center',
	},
	text: {
		flex: 0.3,
		alignItems: 'center',
		justifyContent: 'center',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#1D7253',
		borderRadius: 10,
	},
});

export default Home;
