import React, { useEffect, useContext, useRef, useReducer } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getCountry } from '../screens/api';
import Logo from '../components/Logo';
import IsVaccinated from '../components/IsVaccinated';
import IsntVaccinated from '../components/IsntVaccinated';
import Restrictions from '../components/Restrictions';
import Returning from '../components/Returning';
import AddToTrips from '../components/AddToTrips';
import { Spinner } from 'native-base';
import { dataStore } from '../providers/Data';
import { useFonts, Oxygen_700Bold } from '@expo-google-fonts/oxygen';


const IndividualCountry = (props) => {
  const {
    countryName,
    countryInfo,
    setCountryInfo,
    isLoading,
    setIsLoading,
    isLoggedIn,
    user
  } = useContext(dataStore);

  const nav = props.navigation;

  let [fontsLoaded] = useFonts({
    Oxygen_700Bold
  });


  useEffect(() => {
    setIsLoading(true);
    getCountry(countryName)
      .then((country: any) => {
        setCountryInfo(country);
      })
      .then(() => {
        setIsLoading(false);
      });
  }, [countryName, user]);

  useEffect(() => {
    nav.navigate('Trips');
  }, [user]);

  if (!isLoggedIn) return null;
  if (!countryInfo.country) return null;

  if (!countryInfo) return null;

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Spinner />
      </View>
    );
  }


	return (
		<SafeAreaView>
			<ScrollView>
				<View style={styles.container}>
					<Logo />
					<View style={styles.countryNameContainer}>
						<View
							style={[
								countryInfo.colorList === 'green'
									? { backgroundColor: '#0aa33a' }
									: countryInfo.trafficLight === 'amber'
									? { backgroundColor: '#eb8407' }
									: { backgroundColor: '#ba1f11' },
								styles.trafficLight,
							]}
						></View>
						<Text style={styles.name}>{countryInfo.country}</Text>
					</View>
					<MapView
						style={styles.map}
						showsUserLocation={true}
						region={countryInfo.geoLocation}
						// user location will be available to see, if location services are enabled
					/>
					<View>
						<IsVaccinated />
						<View style={styles.button}>
							<AddToTrips />
						</View>
						<IsntVaccinated />
						<Restrictions />
						<Returning />
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);

};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#DCEFF9'
  },
  map: {
    alignSelf: 'center',
    width: 370,
    height: 370,


		alignItems: 'center',
		borderWidth: 3,
		borderColor: '#ddd',
		borderRadius: 6,
	},
	name: {
		fontSize: 30,
		fontFamily: 'Oxygen_700Bold',
		color: 'black',
	},
	logo: {
		flex: 1,
		height: 20,
		padding: 20,
		margin: 10,
		borderRadius: 80,
		alignItems: 'stretch',
		backgroundColor: '#5f9ea0',
	},
	countryTitle: {
		height: 5,
		margin: 20,
		padding: 20,
		width: 70,
		backgroundColor: '#1D7253',
		borderRadius: 20,
		alignItems: 'center',
		justifyContent: 'center',
	},
	heatMapContainer: {
		flex: 3,
		flexDirection: 'row',
		margin: 25,
		height: 20,
		alignItems: 'stretch',
		alignSelf: 'stretch',
		padding: 50,
		backgroundColor: '#fff8dc',
		justifyContent: 'center',
	},
	heatMap: {
		flexDirection: 'row',
		margin: 10,
		color: '#000000',
		alignItems: 'center',
		justifyContent: 'center',
	},
	countryInfoContainer: {
		backgroundColor: '#fff8dc',
		flex: 4,
		flexDirection: 'column',
		alignSelf: 'stretch',
		margin: 25,
		height: 20,
		padding: 50,
	},
	info: {
		margin: 2,
		alignSelf: 'center',
	},
	infoContainer: {
		margin: 20,
		padding: 20,
		backgroundColor: '#4d94ff',
		borderRadius: 15,
	},
	text: {
		textAlign: 'center',
		margin: 5,
		fontSize: 15,
	},
	loading: {
		position: 'absolute',
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		alignItems: 'center',
		justifyContent: 'center',
	},
	countryNameContainer: {
		flexDirection: 'row',
		marginHorizontal: 3,
		marginVertical: 8,
		padding: 10,
		alignItems: 'center',
		justifyContent: 'flex-start',
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
});

export default IndividualCountry;
