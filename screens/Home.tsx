import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MyTabs from '../navigation/MyTabs';
import Dropdown from '../navigation/Dropdown';

const Tabs = createBottomTabNavigator();

const Home = (props: any) => {
  const nav = props.navigation;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>The Covid-19 Travel App Name</Text>
        <Button title="My Trips" onPress={() => nav.navigate('Trips')} />
        <Dropdown />
      </View>
      <View style={styles.tabs}>
        <MyTabs />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabs: {
    position: 'absolute',
    bottom: 0
  }
});

export default Home;
