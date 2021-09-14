import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './screens/Home';
import IndividualCountry from './screens/IndividualCountry';
import Trips from './screens/Trips';
import MyTabs from './navigation/MyTabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import MyStack from './navigation/MyStack';

const App = () => {
	return (
		<SafeAreaProvider>
			<View>
				<MyStack />
			</View>
			<View style={styles.container}>
				<MyTabs />
			</View>
			<StatusBar style='auto' />
		</SafeAreaProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
	tabs: {
		position: 'absolute',
		bottom: 0,
	},
});

export default App;
