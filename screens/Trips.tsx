import React, { useState } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  FlatList
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
        acceptingTourists: false,
        vaccineRequired: true,
        testRequired: true,
        extraDocsRequired: true,
        newInfo: false
      }
      // {
      //   country: 'greece',
      //   trafficLight: 'amber',
      //   dateGoing: '2022.05.03',
      //   dateReturning: '2022.05.10',
      //   acceptingTourists: true,
      //   vaccineRequired: true,
      //   testRequired: true,
      //   extraDocsRequired: true,
      //   newInfo: true
      // }
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

          <FlatList
            keyExtractor={(item) => item.country}
            data={trips}
            renderItem={({ item }) => (
              <View style={styles.singleTrip}>
                {/* country name and traffic light color behind */}
                <View
                  style={{
                    backgroundColor: item.trafficLight,
                    padding: 10,
                    height: 5,
                    width: 10
                  }}
                >
                  <Text style={[styles.listItem, styles.countryName]}>
                    {item.country}
                  </Text>
                </View>

                {/* date going and returning */}
                <Text style={[styles.listItem, styles.travelDate]}>
                  {' '}
                  Date Going: {item.dateGoing}
                </Text>
                <Text style={[styles.listItem, styles.travelDate]}>
                  {' '}
                  Date Returning: {item.dateReturning}
                </Text>

                {/* Accepting Tourists */}
                <View style={styles.listItem}>
                  <Text> Accepting Tourists </Text>
                  <Ionicons
                    name={
                      item.acceptingTourists
                        ? 'md-checkmark-circle'
                        : 'md-close-circle'
                    }
                    size={20}
                    color={item.acceptingTourists ? 'green' : 'red'}
                  />
                </View>
                {/* test required? */}
                <View style={styles.listItem}>
                  <Text> Test Required </Text>
                  <Ionicons
                    name={
                      item.testRequired
                        ? 'md-checkmark-circle'
                        : 'md-close-circle'
                    }
                    size={20}
                    color={item.testRequired ? 'green' : 'red'}
                  />
                </View>

                {/* Vaccine Required */}
                <View style={styles.listItem}>
                  <Text> Vaccine Required </Text>

                  <Ionicons
                    name={
                      item.vaccineRequired
                        ? 'md-checkmark-circle'
                        : 'md-close-circle'
                    }
                    size={20}
                    color={item.vaccineRequired ? 'green' : 'red'}
                  />
                </View>

                {/* Docs required? */}
                <View style={styles.listItem}>
                  <Text> Docs Required </Text>

                  <Ionicons
                    name={
                      item.docsRequired
                        ? 'md-checkmark-circle'
                        : 'md-close-circle'
                    }
                    size={20}
                    color={item.docsRequired ? 'green' : 'red'}
                  />
                </View>
              </View>
            )}
          ></FlatList>
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
    height: 20,
    padding: 20,
    margin: 10,
    borderRadius: 80,
    alignItems: 'stretch',
    backgroundColor: '#5f9ea0'
  },
  myTripsContainer: {
    borderColor: 'blue',
    borderWidth: 2,
    flexDirection: 'column',
    height: 500,
    marginTop: 100,
    margin: 50,
    padding: 50
  },
  myTripsTitle: {
    alignSelf: 'center',
    margin: 5
  },
  singleTripContainer: {
    borderColor: 'red',
    borderWidth: 2,
    flex: 1,
    backgroundColor: 'yellow',
    flexDirection: 'column',
    marginTop: 80,
    margin: 50,
    height: 400,
    width: 200,
    padding: 20
  },
  countryName: {
    textAlign: 'center',
    fontSize: 20,
    textTransform: 'uppercase',
    color: 'black'
  },
  travelDate: {
    color: 'black'
  },
  testRequired: {
    color: 'black'
  },
  vaccineRequired: {
    color: 'black'
  },
  acceptingTourists: {
    color: 'black'
  },
  docsRequired: {
    color: 'black'
  },
  listItem: {
    padding: 5
  },
  info: {
    margin: 2,
    alignSelf: 'stretch'
  },
  button: {
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
