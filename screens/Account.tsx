import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyTrips from '../components/MyTrips';
import Logo from '../components/Logo';
import AccountInfo from '../components/AccountInfo';

const Account = (props) => {
	const nav = props.navigation;

	return (
		<SafeAreaView>
			<View>
				<Logo />
				<View style={styles.background}>
					<AccountInfo />
					<MyTrips />
				</View>
				<View style={styles.background}>
					<TouchableOpacity style={styles.button} onPress={() => nav.navigate('LandingPage')}>
						<Text>Log Out</Text>
					</TouchableOpacity>

					<TouchableOpacity style={styles.button} onPress={() => nav.navigate('LandingPage')}>
						<Text>Delete Account</Text>
					</TouchableOpacity>
				</View>
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
	background: {
		backgroundColor: '#66b2ff',
		margin: 10,
		borderRadius: 15,
	},
	button: {
		backgroundColor: '#FF3232',
		alignSelf: 'center',
		margin: 20,
		padding: 15,
		textAlign: 'center',
		borderRadius: 15,
	},
});

export default Account;
