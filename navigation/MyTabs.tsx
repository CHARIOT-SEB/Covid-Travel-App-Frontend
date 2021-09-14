import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from '../screens/Home';
import Account from '../screens/Account';
import Trips from '../screens/Trips';
import SignUpForm from '../screens/SignUpForm';
import IndividualCountry from '../screens/IndividualCountry';

const Tabs = createBottomTabNavigator();

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
    }

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: 'blue',
  tabBarInactiveTintColor: 'gray'
});

function MyTabs() {
  return (
    <Tabs.Navigator style={styles.tabs} screenOptions={handleIcons}>
      <Tabs.Screen style={styles.tab} name="Account" component={Account} />
      <Tabs.Screen style={styles.tab} name="Trips" component={Trips} />
      <Tabs.Screen
        style={styles.tab}
        name="Country"
        component={IndividualCountry}
      />
      <Tabs.Screen style={styles.tab} name="Home" component={Home} />
      <Tabs.Screen
        style={styles.tab}
        name="SignUpForm"
        component={SignUpForm}
      />
    </Tabs.Navigator>
  );
}

const styles = StyleSheet.create({
  tabs: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'space-evenly'
  },
  tab: {}
});

export default MyTabs;
