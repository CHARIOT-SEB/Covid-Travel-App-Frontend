import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import MapView from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import geoLocations from './geoLocations/geoLocations.json';
import { getCountry } from '../screens/api';
import Logo from '../components/Logo';

interface State {
  country: string;
  colorList: string;
  withFullVaccination: { documentsRequired: [boolean] };
}

const IndividualCountry = (country: { route: { params: string } }) => {
  let info: any, setInfo: any;
  [info, setInfo] = useState({});
  const [region, setRegion] = useState({
    latitude: 47.4256,
    longitude: 2.6054,
    latitudeDelta: 10,
    longitudeDelta: 0.25
  });

  let mapArea = country.route.params;

  //   const geo = Object.entries(geoLocations).find((arr) => {
  //     if (arr[0] === mapArea) {
  //       newGeo.latitude = arr[1].latitude;
  //       newGeo.longitude = arr[1].longitude;
  //       newGeo.latitudeDelta = arr[1].latitudeDelta;
  //       newGeo.longitudeDelta = arr[1].longitudeDelta;
  //       return;
  //     }
  //   });

  useEffect(() => {
    getCountry(mapArea).then((country: object) => {
      setInfo(country);
    });
    setRegion(region);
  }, [country]);

  console.log(info);

  if (!info.country) return null;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Logo />
        <Text>{info.country}</Text>
        <Text>{info.colorList}</Text>
        <MapView
          style={styles.map}
          showsUserLocation={true}
          region={region}
          // user location will be available to see, if location services are enabled
        />
        <View style={styles.container}>
          <View>
            <Text>With Full Vaccination</Text>
          </View>
          <Text>
            Days innoculated before entry{' '}
            {
              info.entryRequirements.withFullVaccination
                .daysInnoculatedBeforeEntry
            }
          </Text>
          <Text>
            Covid Test required{' '}
            {info.entryRequirements.withFullVaccination.test.maximumHoursBefore}{' '}
            hours before travel
          </Text>
          <Text>Documents Required</Text>
          <Text>
            {info.entryRequirements.withFullVaccination.documentsRequired.map(
              (item: string) => {
                return <Text>{item}</Text>;
              }
            )}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    alignSelf: 'center',
    width: 370,
    height: 500,

    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#ddd',
    borderRadius: 6
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
  countryTitle: {
    height: 5,
    margin: 20,
    padding: 20,
    width: 70,
    backgroundColor: '#ff7f50',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
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
    justifyContent: 'center'
  },
  heatMap: {
    flexDirection: 'row',
    margin: 10,
    color: '#000000',
    alignItems: 'center',
    justifyContent: 'center'
  },
  countryInfoContainer: {
    backgroundColor: '#fff8dc',
    flex: 4,
    flexDirection: 'column',
    alignSelf: 'stretch',
    margin: 25,
    height: 20,
    padding: 50
  },
  info: {
    margin: 2,
    alignSelf: 'center'
  },
  text: {}
});

export default IndividualCountry;
