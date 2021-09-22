import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';
import { dataStore } from '../providers/Data';
import { Popover, Pressable } from 'native-base';
import { patchTrips } from '../screens/api';
import { Formik } from 'formik';

// This button will add the country chosen, to the user's upcoming trips
// construct a request to send to the back-end
/* trip: {
                    country: 'Ireland',
                    trafficLight: 'amber',
                    dateGoing: new Date(2022, 2, 28),     ---> These need to be sent in this format to the backend
                    dateReturning: new Date(2022, 3, 10), ---^
                    acceptingTourists: true, ---> Accepting Vaxxed or unvaxxed tourists?
                    vaccineRequired: true,   ---> Only accepting Vaxxed tourists
                    testRequired: true,      ---> Only if one box is ticked from with/without Vax
                    extraDocsRequired: true, ---> if length of docsRequired > 0
                    newInfo: false           ---> Not updated on the backend, can put in if you want
                  } */

// on press: extract info and build trip object, using information

const AddToTrips = () => {
  const { countryInfo, user, setUser } = useContext(dataStore);
  const [submitTrip, setSubmitTrip] = useState(false);

  useEffect(() => {
    setSubmitTrip(false);
  }, []);

  const newTrip = {
    trip: {
      country: countryInfo.country,
      trafficLight: countryInfo.colorList,
      dateGoing: new Date(2021, 11, 18),
      dateReturning: new Date(2022, 0, 1),
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

  const handlePress = () => {
    patchTrips(newTrip, email).then((user) => {
      setUser(user);
    });
  };

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
            <TextInput
              style={styles.input}
              placeholder="Date Leaving"
              onChangeText={props.handleChange('dateGoing')}
              value={props.values.dateGoing}
            />

            <TextInput
              style={styles.input}
              placeholder="Date Returning"
              onChangeText={props.handleChange('dateReturning')}
              value={props.values.dateReturning}
            />
            <Button
              title="Add Your Trip"
              color="red"
              onPress={() => {
                props.handleSubmit();
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
