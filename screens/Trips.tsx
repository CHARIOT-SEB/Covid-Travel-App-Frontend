import React from 'react';
import { SafeAreaView, Text, View, StyleSheet, Button } from 'react-native';

const Trips = (props: any) => {
  const nav = props.navigation;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.logo}> logo</View>
        <Button
          title='Check Country'
          onPress={() => nav.navigate('IndividualCountry')}
        ></Button>
        <View style={styles.myTripsContainer}>
          <Text style={styles.myTripsTitle}>My Trips</Text>
          <View style={styles.singleTripContainer}>
            <Text style={styles.info}>Trip 1</Text>
            <Text style={styles.info}>info 1</Text>
            <Text style={styles.info}>info 2</Text>
            <Text style={styles.info}>info 3</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    flex: 1,
    height: 20,
    padding: 20,
    margin: 10,
    borderRadius: 80,
    alignItems: 'stretch',
    backgroundColor: '#5f9ea0'
  },
  myTripsContainer: {
    backgroundColor: '#fff8dc',
    flex: 2,
    flexDirection: 'column',
    alignSelf: 'stretch',
    margin: 25,
    padding: 50
  },
  myTripsTitle: {
    alignSelf: 'center',
    margin: 5
  },
  singleTripContainer: {
    backgroundColor: '#a9a9a9',
    flexDirection: 'column',
    alignSelf: 'stretch',
    margin: 5,
    height: 80,
    padding: 20
  },
  info: {
    margin: 2,
    alignSelf: 'center'
  }
});

export default Trips;
