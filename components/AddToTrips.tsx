import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { dataStore } from '../providers/Data';
import { Pressable } from 'native-base';
import AddDates from './AddDates';

const AddToTrips = () => {
  const { countryInfo, user, submitTrip, setSubmitTrip } =
    useContext(dataStore);

  useEffect(() => {
    setSubmitTrip(false);
  }, []);


  if (!countryInfo.country) return null;


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
            position: 'relative',
            alignSelf: 'center',
            fontWeight: 'bold'
          }}
        >
          Add To Trips
        </Text>
      </Pressable>
      {submitTrip && <AddDates />}
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
