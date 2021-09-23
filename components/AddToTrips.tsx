import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { dataStore } from '../providers/Data';
import { Popover, Pressable } from 'native-base';
import { patchTrips } from '../screens/api';
import { Formik } from 'formik';

const AddToTrips = () => {
  const { countryInfo, user, setUser } = useContext(dataStore);
  const [submitTrip, setSubmitTrip] = useState(false);

  useEffect(() => {
    setSubmitTrip(false);
  }, []);

  const newTrip = (dates: any) => {
      const {dateGoing, dateReturning} = dates;
      let slash1 = dateGoing.indexOf('/');
      const outboundDay = dateGoing.slice(0,slash1);
      let slash2 = dateGoing.indexOf('/', slash1 + 1);
      const outboundMonth = dateGoing.slice(slash1 + 1, slash2);
      const outboundYear = dateGoing.slice(-4);
      const outbound = new Date(parseInt(outboundYear), parseInt(outboundMonth) - 1, parseInt(outboundDay) + 1)

      slash1 = dateReturning.indexOf('/');
      const inboundDay = dateReturning.slice(0,slash1);
      slash2 = dateReturning.indexOf('/', slash1 + 1);
      const inboundMonth = dateReturning.slice(slash1 + 1, slash2);
      const inboundYear = dateReturning.slice(-4);
      const inbound = new Date(parseInt(inboundYear), parseInt(inboundMonth) - 1, parseInt(inboundDay))

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
    }
  };


	const email = user.email;


  const handlePress = (dates: any) => {
    patchTrips(newTrip(dates), email).then((user) => {
      setUser(user);
    });
  };

  if(!countryInfo.country) return null;

  return (
    <View>
      <Pressable
        style={styles.button}
        onPress={() =>
          submitTrip ? setSubmitTrip(false) : setSubmitTrip(true)
        }
      >
        <Text
          style={{
            fontFamily: 'Oxygen_400Regular',
            color: '#fff',
            textTransform: 'uppercase',
            fontSize: 20,
            margin: 10,
            position: 'relative'
          }}
        >
          Add To Trips
        </Text>
      </Pressable>
      <Formik
        initialValues={{ dateGoing: '', dateReturning: '' }}
        onSubmit={(values) => {}}
      >
        {(props) => (
          <View>
            <Text>Date Leaving:</Text>
            <TextInput
              style={styles.input}
              placeholder="dd/mm/yyyy"
              onChangeText={props.handleChange('dateGoing')}
              value={props.values.dateGoing}
            />
            <Text>Date Returning:</Text>
            <TextInput
              style={styles.input}
              placeholder="dd/mm/yyyy"
              onChangeText={props.handleChange('dateReturning')}
              value={props.values.dateReturning}
            />
            <Button
              title="Add Your Trip"
              color="red"
              onPress={() => {
                handlePress(props.values)
                props.handleSubmit;
              }}
            />
          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 2
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#ddd',
    fontSize: 18,
    borderRadius: 10,
    margin: 10
  },
  btn: {
    borderRadius: 8,
    marginVertical: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#5c98c0'
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center'
  }

});

export default AddToTrips;
