import React, { useContext } from 'react';
import {
	SafeAreaView,
	Text,
	View,
	StyleSheet,
	Pressable,
	FlatList,
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
	Oxygen_700Bold,
} from '@expo-google-fonts/oxygen';
import { removeTrips } from './api';
import { Spinner } from 'native-base';

const Trips = (props: any) => {

	const [fontsLoaded] = useFonts({
		Oxygen_300Light,
		Oxygen_400Regular,
		Oxygen_700Bold,
	});
	const { user, isLoggedIn } = useContext(dataStore);
	const nav = props.navigation;
	const trips = user.trips;

	if (!isLoggedIn) return null;

	if (trips.length === 0) return <Text> You have no trips booked yet</Text>;

	return (
		<SafeAreaView style={styles.container}>
			<Logo />
			<Pressable
				style={styles.countryButton}
				onPress={() => nav.navigate('Home')}
			>
				<Text style={styles.countryButtonText}>Check Country</Text>
			</Pressable>


  const editTrip = (tripInfo: object, email: string) => {
    setIsLoading(true);
    removeTrips(tripInfo, email).then((data: any) => {
      setUser(data);
      setIsLoading(false);
    });
  };

  if (isLoading || !fontsLoaded) return <Spinner color="#0aa33a" />;



								<Text style={[styles.listItem, styles.countryName]}>
									{item.country}
								</Text>
							</View>



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
                  <Ionicons name="trash-outline" size={30} color="grey" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.smlBtn}
                  onPress={() => {
                    handleArchive(item.country);
                  }}
                >
                  <MaterialIcons name="file-present" size={30} color="grey" />
                </TouchableOpacity>
              </View>

              {/* date going and returning */}
              <View style={styles.dateContainer}>
                <AntDesign name="calendar" size={30} color="grey" />
                <Text style={[styles.listItem, styles.itemText]}>
                  Date Going:{' '}
                  {item.dateGoing.slice(8, 10) +
                    '-' +
                    item.dateGoing.slice(5, 7) +
                    '-' +
                    item.dateGoing.slice(0, 4)}
                </Text>
              </View>
              <View style={styles.dateContainer}>
                <AntDesign name="calendar" size={30} color="grey" />
                <Text style={[styles.listItem, styles.itemText]}>
                  {' '}
                  Date Returning:{' '}
                  {item.dateReturning.slice(8, 10) +
                    '-' +
                    item.dateReturning.slice(5, 7) +
                    '-' +
                    item.dateReturning.slice(0, 4)}
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
                  name="test-tube"
                  size={30}
                  color="grey"
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
                <AntDesign name="filetext1" size={30} color="grey" />
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
		justifyContent: 'center',
	},
	myTripsContainer: {
		flex: 1,
		alignItems: 'center',
		borderRadius: 15,
		padding: 5,
		marginVertical: 10,
		paddingHorizontal: 25,
	},
	myTripsTitle: {
		fontFamily: 'Oxygen_700Bold',
		textTransform: 'uppercase',
		padding: 5,
		margin: 5,
		fontSize: 24,
	},
	singleTrip: {
		flex: 1,
		backgroundColor: '#DCEFF9',
		flexDirection: 'column',
		paddingVertical: 10,

		margin: 5,
		borderRadius: 10,
		borderBottomColor: '#1D7253',
		borderBottomWidth: 1,
	},
	trafficLight: {
		borderRadius: 50,
		marginHorizontal: 3,
		marginVertical: 8,
		width: 50,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'center',
	},
	countryNameContainer: {
		flexDirection: 'row',
		marginHorizontal: 3,
		marginVertical: 8,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	countryName: {
		fontFamily: 'Oxygen_700Bold',
		fontSize: 20,
		textTransform: 'uppercase',
		color: 'black',
	},
	itemText: {
		fontFamily: 'Oxygen_700Bold',
		paddingHorizontal: 15,
		color: 'black',
	},
	listItem: {
		flexDirection: 'row',
		paddingVertical: 8,
		paddingHorizontal: 15,
		justifyContent: 'flex-start',
	},
	dateContainer: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		paddingVertical: 5,
		paddingHorizontal: 15,
	},
	countryButtonText: {
		fontFamily: 'Oxygen_700Bold',
		fontSize: 17.5,
		margin: 10,
		color: '#F0F0F0',
		textTransform: 'uppercase',
	},
	countryButton: {
		elevation: 8,
		backgroundColor: '#009688',
		borderRadius: 10,
		paddingVertical: 1,
		paddingHorizontal: 12,
	},
});

export default Trips;
