import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

import { uuid } from 'uuidv4';

const Trips = (props: any) => {
  const nav = props.navigation;

  // array of country names, names added to array when countries are added to my trips'
  const [trips, setTrips] = useState(['Portugal', 'France']);

  // will we need to fetch the data for each country in the array and set a state
  // get individual country?
  const [countries, setCountriesData] = useState([
    {
      country: 'portugal',
      colorList: 'amber',
      vaccinationRequired: true,
      quarantine: 0,
      documents: ['vaccination status proof', 'covid recovery certificate'],
      masksRequired: true,
      moreInfo: 'face masks required in all inclosed public spaces'
    },
    {
      country: 'france',
      colorList: 'amber',
      vaccinationRequired: true,
      quarantine: 0,
      documents: ['vaccination status proof', 'covid recovery certificate'],
      masksRequired: true,
      moreInfo: 'face masks required in all inclosed public spaces'
    }
  ]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.logo}> logo</View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => nav.navigate('IndividualCountry')}
        >
          {' '}
          Check Country
        </TouchableOpacity>

        <View style={styles.myTripsContainer}>
          <Text style={styles.myTripsTitle}>My Trips</Text>
          {countries.map((country) => {
            return (
              <View key={uuid()}>
                <Text>{country.country}</Text>
              </View>
            );
          })}
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
    flex: 4,
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
    height: 100,
    padding: 20
  },
  info: {
    margin: 2,
    alignSelf: 'stretch'
  },
  button: {
    flex: 1,
    backgroundColor: '#00ced1',
    height: 5,
    alignSelf: 'center',
    margin: 5,
    padding: 15,
    textAlign: 'center',
    borderRadius: 15
  }
});

export default Trips;
