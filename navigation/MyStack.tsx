import React from 'react';
import { View } from 'react-native';
import Home from '../screens/Home';
import Trips from '../screens/Trips';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MyStack = () => {
	const Stack = createNativeStackNavigator();

	return (
		<View>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name='Home' component={Home} />
					<Stack.Screen name='Trips' component={Trips} />
				</Stack.Navigator>
			</NavigationContainer>
		</View>
	);
};

export default MyStack;
