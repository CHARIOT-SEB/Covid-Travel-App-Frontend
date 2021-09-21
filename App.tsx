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
import DataProvider from './providers/Data';

//  <DataProvider> component stores any data in state, and wraps the app to share data from the top down

const App = () => {

	return (
		<SafeAreaProvider>
			<DataProvider>  
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
				</NativeBaseProvider>
			</DataProvider>
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
