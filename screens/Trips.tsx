import React, { useContext } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList
} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign
} from '@expo/vector-icons';
import Logo from '../components/Logo';
import { dataStore } from '../providers/Data';
import {
  useFonts,
  Oxygen_300Light,
  Oxygen_400Regular,
  Oxygen_700Bold
} from '@expo-google-fonts/oxygen';
import { patchTrips } from './api';
import { Spinner } from 'native-base';

const Trips = (props: any) => {
  const [fontsLoaded] = useFonts({
    Oxygen_300Light,
    Oxygen_400Regular,
    Oxygen_700Bold
  });
  const { user, setUser, isLoggedIn, isLoading, setIsLoading } =
    useContext(dataStore);

  const nav = props.navigation;
  const trips = user.trips;

  if (!isLoggedIn || !user) return null;

  const handleDelete = (country: string) => {
    const index = 0;
    const email = user.email;
    const tripInfo = { deleteTrip: index };
    editTrip(tripInfo, email);
  };

  const handleArchive = (country: string) => {
    const index = 0;
    const email = user.email;
    const tripInfo = { archiveTrip: index };
    editTrip(tripInfo, email);
  };

  const editTrip = (tripInfo: object, email: string) => {
    setIsLoading(true);

    patchTrips(tripInfo, email).then((data: any) => {
      setUser(data);
      console.log(user, 'new user');
      setIsLoading(false);
    });
  };

  if (isLoading || !fontsLoaded) return <Spinner color='#0aa33a' />;

  if (trips && trips.length === 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Logo />
        <TouchableOpacity
          style={styles.countryButton}
          onPress={() => nav.navigate('Home')}
        >
          <Text style={styles.countryButtonText}>Check Country</Text>
        </TouchableOpacity>

        <View style={styles.myTripsContainer}>
          <Text style={styles.myTripsTitle}>My Trips</Text>

          <Text style={styles.noTrips}>You haven't planned any trips yet</Text>

          <TouchableOpacity
            style={styles.countryButton}
            onPress={() => nav.navigate('Home')}
          >
            <Text style={styles.countryButtonText}>Start planning...</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <Logo />
      <TouchableOpacity
        style={styles.countryButton}
        onPress={() => nav.navigate('Home')}
      >
        <Text style={styles.countryButtonText}>Check Country</Text>
      </TouchableOpacity>

      <View style={styles.myTripsContainer}>
        <Text style={styles.myTripsTitle}>My Trips</Text>

        <FlatList
          keyExtractor={(item) => item.country}
          data={trips}
          renderItem={({ item }) => (
            <View style={styles.singleTrip}>
              <View style={styles.countryNameContainer}>
                <View
                  style={[
                    item.trafficLight === 'green'
                      ? { backgroundColor: '#0aa33a' }
                      : item.trafficLight === 'amber'
                      ? { backgroundColor: '#eb8407' }
                      : { backgroundColor: '#ba1f11' },
                    styles.trafficLight
                  ]}
                ></View>

                <Text style={[styles.listItem, styles.countryName]}>
                  {item.country}
                </Text>

                <TouchableOpacity
                  style={styles.smlBtn}
                  onPress={() => {
                    handleDelete(item.country);
                  }}
                >
                  <Ionicons name='trash-outline' size={30} color='grey' />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.smlBtn}
                  onPress={() => {
                    handleArchive(item.country);
                  }}
                >
                  <MaterialIcons name='file-present' size={30} color='grey' />
                </TouchableOpacity>
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
                  color={item.acceptingTourists ? '#1D7253' : '#ba1f11'}
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
                  color={item.testRequired ? '#1D7253' : '#ba1f11'}
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
                  color={item.vaccineRequired ? '#1D7253' : '#ba1f11'}
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
                  color={item.extraDocsRequired ? '#1D7253' : '#ba1f11'}
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
    backgroundColor: '#DCEFF9',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  myTripsContainer: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 15,
    padding: 5,
    marginVertical: 10,
    paddingHorizontal: 25
  },
  myTripsTitle: {
    fontFamily: 'Oxygen_700Bold',
    textTransform: 'uppercase',
    padding: 5,
    margin: 5,
    fontSize: 24
  },
  singleTrip: {
    flex: 1,
    backgroundColor: '#DCEFF9',
    flexDirection: 'column',
    paddingVertical: 10,
    margin: 5,
    borderRadius: 10,
    borderBottomColor: '#1D7253',
    borderBottomWidth: 1
  },
  trafficLight: {
    borderRadius: 50,
    marginHorizontal: 13,
    marginVertical: 8,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center'
  },
  countryNameContainer: {
    flexDirection: 'row',
    marginHorizontal: 3,
    marginVertical: 8,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  countryName: {
    fontFamily: 'Oxygen_700Bold',
    fontSize: 16,
    textTransform: 'uppercase',
    color: 'black',
    borderBottomColor: '#1D7253',
    borderBottomWidth: 0.5
  },
  noTrips: {
    fontFamily: 'Oxygen_400Regular',
    fontSize: 16,
    color: 'black',
    alignSelf: 'center'
  },
  itemText: {
    fontFamily: 'Oxygen_700Bold',
    paddingHorizontal: 15,
    color: 'black'
  },
  listItem: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 15,
    justifyContent: 'flex-start'
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingVertical: 5,
    paddingHorizontal: 15
  },
  countryButtonText: {
    fontFamily: 'Oxygen_700Bold',
    color: 'white',
    textTransform: 'uppercase'
  },
  countryButton: {
    backgroundColor: '#1D7253',
    height: 15,
    margin: 20,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  smlBtn: {
    paddingHorizontal: 10,
    paddingVertical: 5
  }
});

export default Trips;
