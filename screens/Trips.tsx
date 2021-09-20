import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from 'react-native';
import { Button, Spinner } from 'native-base';
import Ionicons from '@expo/vector-icons/Ionicons';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import Logo from '../components/Logo';
import { getUser } from './api';
const Trips = (props: any) => {
  const nav = props.navigation;
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    fullName: 'Jane Smith',
    email: 'jsmith@google.com',
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
      }
    ],
    pastTrips: []
  });

  // password and email come from props from the login page?

  const userObj = {
    email: 'rc@sadballoons.com',
    password: 'sadBalloons'
  };

  useEffect(() => {
    setIsLoading(true);

    getUser(userObj.email, userObj).then((response) => {
      const newUser = response.user;
      console.log(newUser, 'response in get');
      setUser(newUser);
      setIsLoading(false);
    });
  }, []);

  const trips = user.trips;
  console.log(trips, 'trips');

  {
    if (isLoading) return <Spinner color='blue' />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <Button
        // style={styles.button}
        colorScheme='primary'
        variant='outline'
        size='lg'
        onPress={() => nav.navigate('IndividualCountry')}
      >
        <Text>Check Country</Text>
      </Button>

      <View style={styles.myTripsContainer}>
        <Text style={styles.myTripsTitle}>My Trips</Text>

        <FlatList
          keyExtractor={(item) => item.country}
          data={trips}
          renderItem={({ item }) => (
            <View style={styles.singleTrip}>
              {/* country name and traffic light color behind  */}

              <View
                style={[
                  item.trafficLight === 'green'
                    ? { backgroundColor: 'green' }
                    : item.trafficLight === 'amber'
                    ? { backgroundColor: 'orange' }
                    : { backgroundColor: 'crimson' },
                  styles.countryNameContainer
                ]}
              >
                <Text style={[styles.listItem, styles.countryName]}>
                  {item.country}
                </Text>
              </View>

              {/* date going and returning */}
              <View style={styles.dateContainer}>
                <AntDesign name='calendar' size={30} color='grey' />
                <Text style={[styles.listItem, styles.itemText]}>
                  Date Going: {item.dateGoing}
                </Text>
              </View>
              <View style={styles.dateContainer}>
                <AntDesign name='calendar' size={30} color='grey' />
                <Text style={[styles.listItem, styles.itemText]}>
                  {' '}
                  Date Returning: {item.dateReturning}
                </Text>
              </View>
              {/* Accepting Tourists */}
              <View style={styles.listItem}>
                <Ionicons name={'person-sharp'} size={30} color={'grey'} />
                <Text style={styles.itemText}> Accepting Tourists </Text>
                <Ionicons
                  name={
                    item.acceptingTourists
                      ? 'md-checkmark-circle'
                      : 'md-close-circle'
                  }
                  size={25}
                  color={item.acceptingTourists ? 'green' : 'crimson'}
                />
              </View>
              {/* test required? */}
              <View style={styles.listItem}>
                <MaterialCommunityIcons
                  name='test-tube'
                  size={30}
                  color='grey'
                />
                <Text style={styles.itemText}> Test Required </Text>
                <Ionicons
                  name={
                    item.testRequired
                      ? 'md-checkmark-circle'
                      : 'md-close-circle'
                  }
                  size={25}
                  color={item.testRequired ? 'green' : 'crimson'}
                />
              </View>

              {/* Vaccine Required */}
              <View style={styles.listItem}>
                <MaterialCommunityIcons
                  name={'needle'}
                  size={30}
                  color={'grey'}
                />
                <Text style={styles.itemText}> Vaccine Required </Text>

                <Ionicons
                  name={
                    item.vaccineRequired
                      ? 'md-checkmark-circle'
                      : 'md-close-circle'
                  }
                  size={25}
                  color={item.vaccineRequired ? 'green' : 'crimson'}
                />
              </View>

              {/* Docs required? */}
              <View style={styles.listItem}>
                <AntDesign name='filetext1' size={30} color='grey' />
                <Text style={styles.itemText}> Docs Required </Text>
                <Ionicons
                  name={
                    item.extraDocsRequired
                      ? 'md-checkmark-circle'
                      : 'md-close-circle'
                  }
                  size={25}
                  color={item.extraDocsRequired ? 'green' : 'crimson'}
                />
              </View>
            </View>
          )}
        ></FlatList>
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
  myTripsContainer: {
    flex: 1,
    alignItems: 'center',
    borderColor: 'lightgray',
    borderWidth: 2,
    borderRadius: 15,
    padding: 10,
    margin: 2,
    paddingHorizontal: 25
  },
  myTripsTitle: {
    textTransform: 'uppercase',
    padding: 5,
    margin: 5,
    fontWeight: 'bold'
  },
  singleTrip: {
    flex: 1,
    backgroundColor: 'lightgray',
    flexDirection: 'column',
    padding: 5,
    margin: 10,
    borderRadius: 10
  },
  countryNameContainer: {
    transform: [{ scaleX: 2 }],
    borderRadius: 120,
    margin: 20,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  countryName: {
    fontSize: 14,
    textTransform: 'uppercase',
    color: 'black',
    transform: [{ scaleX: 0.5 }]
  },
  itemText: {
    paddingHorizontal: 15,
    color: 'black'
  },
  listItem: {
    flexDirection: 'row',
    paddingVertical: 5,
    justifyContent: 'space-between'
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5
  },
  button: {
    backgroundColor: '#4d94ff',
    height: 5,
    margin: 5,
    padding: 15,
    alignItems: 'stretch',
    borderRadius: 15
  }
});

export default Trips;
