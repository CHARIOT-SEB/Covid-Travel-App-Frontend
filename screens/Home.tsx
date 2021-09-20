// react imports
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, View, Text, Button } from 'react-native';
// file imports
import CountryPicker from '../navigation/CountryPicker';

const Home = (props: any) => {
  const nav = props.navigation;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>The Covid-19 Travel App Name</Text>
        <Button title="My Trips" onPress={() => nav.navigate('Trips')} />
        <CountryPicker nav={nav} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Home;
