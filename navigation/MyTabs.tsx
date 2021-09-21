// react imports
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
// library imports
import Ionicons from '@expo/vector-icons/Ionicons';
// file imports
import Home from '../screens/Home';
import Account from '../screens/Account';
import Trips from '../screens/Trips';
import SignUpForm from '../screens/SignUpForm';
import IndividualCountry from '../screens/IndividualCountry';
import LandingPage from '../screens/LandingPage';

// to access TabNavigator properties
const Tabs = createBottomTabNavigator();

// this function changes tab-navigation colour and icon on press
const handleIcons = ({ route }) => ({
	tabBarIcon: ({ focused, color, size }) => {
		let iconName;

		if (route.name === 'Home') {
			iconName = focused ? 'home' : 'home-outline';
		} else if (route.name === 'Account') {
			iconName = focused ? 'person' : 'person-outline';
		} else if (route.name === 'Trips') {
			iconName = focused ? 'ios-airplane' : 'ios-airplane-outline';
		} else if (route.name === 'Country') {
			iconName = focused ? 'map' : 'map-outline';
		} else if (route.name === 'SignUpForm') {
			iconName = focused ? 'laptop' : 'laptop-outline';
		} else if (route.name === 'LandingPage') {
			iconName = focused ? 'ios-egg' : 'ios-egg-outline';
		}

		// You can return any component that you like here!
		return <Ionicons name={iconName} size={size} color={color} />;
	},
	tabBarActiveTintColor: '#5c98C0',
	tabBarInactiveTintColor: 'gray',
});

const MyTabs = () => {
	return (
		<NavigationContainer>
			<Tabs.Navigator initialRouteName='Home' screenOptions={handleIcons}>
				<Tabs.Screen
					name='Home'
					component={Home}
					options={{ headerShown: false }}
				/>
				<Tabs.Screen
					name='Account'
					component={Account}
					options={{ headerShown: false }}
				/>
				<Tabs.Screen
					name='Trips'
					component={Trips}
					options={{ headerShown: false }}
				/>
				<Tabs.Screen
					name='LandingPage'
					component={LandingPage}
					options={{ headerShown: false }}
				/>
			</Tabs.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({
	tabs: {
		backgroundColor: '#DCEFF9',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'space-evenly',
	},
	tab: {},
});

export default MyTabs;
