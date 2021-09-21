// react imports
import React from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
// file imports
import MyTabs from './navigation/MyTabs';
import MyStack from './navigation/MyStack';
import LandingPage from './screens/LandingPage';
import { NativeBaseProvider } from 'native-base';
import Trips from './screens/Trips';
import appLogo from './logo.png';
import IndividualCountry from './screens/IndividualCountry';
import Home from './screens/Home';
import Account from './screens/Account';
import { useState } from 'react';

const App = () => {

	const [country, setCountry] = useState({});

	return (
		<SafeAreaProvider>
			<NativeBaseProvider>
				<Modal visible={false}>
					<LandingPage />
				</Modal>
				<View>
					<MyStack />
				</View>
				<View style={styles.container}>
					<MyTabs />
				</View>
				<StatusBar style='auto' />

				<Modal visible={false}>
					<Trips />
				</Modal>
				<Modal visible={false}>
					<IndividualCountry country={country} />
				</Modal>
				<Modal visible={false}>
					<Home />
				</Modal>
				<Modal visible={false}>
					<Account />
				</Modal>

			</NativeBaseProvider>
		</SafeAreaProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	tabs: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
});

export default App;
