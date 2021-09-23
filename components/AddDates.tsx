import { Formik } from 'formik';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Pressable
} from 'react-native';
import React, { useContext } from 'react';
import { dataStore } from '../providers/Data';
import { patchTrips } from '../screens/api';

const AddDates = (props: any) => {
  const { countryInfo, setUser, user, setSubmitTrip, submitTrip } =
    useContext(dataStore);
  const nav = props.navigation;

  const email = user.email;
  const newTrip = (dates: any) => {
    const { dateGoing, dateReturning } = dates;
    let slash1 = dateGoing.indexOf('/');
    const outboundDay = dateGoing.slice(0, slash1);
    let slash2 = dateGoing.indexOf('/', slash1 + 1);
    const outboundMonth = dateGoing.slice(slash1 + 1, slash2);
    const outboundYear = dateGoing.slice(-4);
    const outbound = new Date(
      parseInt(outboundYear),
      parseInt(outboundMonth) - 1,
      parseInt(outboundDay) + 1
    );

    slash1 = dateReturning.indexOf('/');
    const inboundDay = dateReturning.slice(0, slash1);
    slash2 = dateReturning.indexOf('/', slash1 + 1);
    const inboundMonth = dateReturning.slice(slash1 + 1, slash2);
    const inboundYear = dateReturning.slice(-4);
    const inbound = new Date(
      parseInt(inboundYear),
      parseInt(inboundMonth) - 1,
      parseInt(inboundDay)
    );

    return {
      country: countryInfo.country,
      trafficLight: countryInfo.colorList,
      dateGoing: outbound,
      dateReturning: inbound,
      acceptingTourists:
        countryInfo.entryRequirements.withFullVaccination.acceptingVisitors,
      vaccineRequired:
        !countryInfo.entryRequirements.withoutFullVaccination.acceptingVisitors,
      testRequired: countryInfo.entryRequirements.withFullVaccination.test
        ? true
        : false,
      extraDocsRequired: countryInfo.entryRequirements.withFullVaccination
        .documentsRequired.length
        ? true
        : false,
      newInfo: false
    };
  };

  const handlePress = (dates: any) => {
    console.log(submitTrip, '<<<<<<<<<<<<<<<<');
    setSubmitTrip(false);
    patchTrips(newTrip(dates), email).then((user) => {
      setUser(user);
      // nav.navigate('Trips');
    });
  };

  if (!countryInfo.country) return null;

  return (
    <Formik
      initialValues={{ dateGoing: '', dateReturning: '' }}
      onSubmit={(values) => {}}
    >
      {(props) => (
        <View>
          <Text />
          <Text style={styles.text}>Date Leaving:</Text>
          <TextInput
            style={styles.input}
            placeholder="dd/mm/yyyy"
            onChangeText={props.handleChange('dateGoing')}
            value={props.values.dateGoing}
          />
          <Text style={styles.text}>Date Returning:</Text>
          <TextInput
            style={styles.input}
            placeholder="dd/mm/yyyy"
            onChangeText={props.handleChange('dateReturning')}
            value={props.values.dateReturning}
          />
          <Pressable
            title="Add Your Trip"
            style={styles.button}
            onPress={() => {
              handlePress(props.values);
              props.handleSubmit;
            }}
          >
            <Text style={styles.add}>Add Trip</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCEFF9',
    alignItems: 'center',
    justifyContent: 'center'
  },
  background: {
    margin: 10,
    borderRadius: 15
  },
  myAccount: {
    fontFamily: 'Oxygen_700Bold',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#1D7253',
    alignSelf: 'center',
    margin: 20,
    padding: 15,
    textAlign: 'center',
    borderRadius: 15,
    width: '40%'
  },
  deleteButton: {
    backgroundColor: '#cd5c5c',
    alignSelf: 'center',
    margin: 20,
    padding: 15,
    textAlign: 'center',
    borderRadius: 15
  },
  input: {
    alignSelf: 'center',
    padding: 15
  },
  text: {
    alignSelf: 'center'
  },
  add: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold'
  }
});

export default AddDates;
