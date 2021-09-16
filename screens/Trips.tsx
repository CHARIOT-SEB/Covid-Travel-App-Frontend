import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity
} from 'react-native';

import uuid from 'react-uuid';
import Ionicons from '@expo/vector-icons/Ionicons';

const Trips = (props: any) => {
  const nav = props.navigation;

  // will we need to fetch the data for each country in the array and set a state
  // get individual country?

  //temp info until we get heroku
  const userData = {
    fullName: 'John Smith',
    email: 'js@google.com',
    password: 'password',
    trips: [
      {
        country: 'france',
        trafficLight: 'amber',
        dateGoing: '2022.01.12',
        dateReturning: '2022.01.24',
        acceptingTourists: true,
        vaccineRequired: true,
        testRequired: true,
        extraDocsRequired: true,
        newInfo: false
      },
      {
        country: 'greece',
        trafficLight: 'amber',
        dateGoing: '2022.05.03',
        dateReturning: '2022.05.10',
        acceptingTourists: true,
        vaccineRequired: true,
        testRequired: true,
        extraDocsRequired: true,
        newInfo: true
      }
    ],
    pastTrips: [
      {
        country: 'poland',
        dateGoing: '2021.12.02',
        dateReturning: '2021.12.06'
      }
    ]
  };
  const trips: any = userData.trips;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.logo}></View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => nav.navigate('IndividualCountry')}
        >
          <Text>Check Country</Text>
        </TouchableOpacity>

        <View style={styles.myTripsContainer}>
          <Text style={styles.myTripsTitle}>My Trips</Text>
          {trips.map((country: any) => {
            return (
              <View key={uuid()}>
                <Text style={styles.countryName}>{country.country}</Text>
                <Text style={styles.countryColor}>{country.trafficLight}</Text>
                <Text style={styles.travelDate}> {country.dateGoing}</Text>
                <Text style={styles.travelDate}> {country.dateReturning}</Text>
                <Text style={styles.acceptingTourists ? 'checkmark' : 'close'}>
                  {' '}
                  {country.acceptingTourists}
                </Text>
                <Text style={styles.testRequired}> {country.testRequired}</Text>
                <Text style={styles.vaccineRequired}>
                  {' '}
                  {country.vaccineRequired}
                </Text>
                <Text style={styles.docsRequired}> {country.docsRequired}</Text>
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
    backgroundColor: 'yellow',
    flexDirection: 'column',
    alignSelf: 'stretch',
    margin: 5,
    height: 100,
    padding: 20
  },
  countryName: {
    color: 'blue'
  },
  countryColor: {
    color: 'blue'
  },
  travelDate: {
    color: 'blue'
  },
  testRequired: {
    color: 'blue'
  },
  vaccineRequired: {
    color: 'blue'
  },
  acceptingTourists: {
    color: 'blue'
  },
  docsRequired: {
    color: 'blue'
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
