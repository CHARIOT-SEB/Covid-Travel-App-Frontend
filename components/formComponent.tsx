import React, { useState, useEffect, useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Button,
  Alert
} from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Spinner } from 'native-base';
import {
  useFonts,
  Oxygen_300Light,
  Oxygen_400Regular,
  Oxygen_700Bold
} from '@expo-google-fonts/oxygen';
import { dataStore } from '../providers/Data';
import { createUser } from '../screens/api';

const userSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().min(4).max(10).required()
});

const formComponent = (props: any) => {
  //states from usecontext
  const { isLoading, setIsLoading, user, setUser, isLoggedIn, setIsLoggedIn } =
    useContext(dataStore);
  // navigation for redirect
  const nav = props.navigation;
  //fonts
  const [fontsLoaded] = useFonts({
    Oxygen_300Light,
    Oxygen_400Regular,
    Oxygen_700Bold
  });

  // function to set new user from form
  const signUpUser = (userInfo: object) => {
    setIsLoading(true);
    createUser(userInfo)
      .then((response) => {
        const newUser = response.user;
        setUser(newUser);
        setIsLoggedIn(true);
        //redirect to home page
        //   nav.navigation('Home');

        setIsLoading(false);
      })
      .catch((err) => {
        Alert.alert('Warning!', 'User already exists!', [
          {
            text: 'Ok',
            onPress: (nav) => navigateHome(nav),
            style: 'cancel'
          }
        ]);
      });
  };
  const navigateHome = (nav: any) => {
    nav.navigate('Home');
  };

  console.log(user, 'user');
  // spinner to wait for loading
  {
    if (isLoading || !fontsLoaded) return <Spinner color='#0aa33a' />;
  }

  return (
    <View style={styles.formContainer}>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={userSchema}
        onSubmit={(values, actions) => {
          signUpUser(values);
          actions.resetForm();
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder='name'
              onChangeText={props.handleChange('name')}
              value={props.values.name}
              onBlur={props.handleBlur('name')}
            />
            <Text style={styles.errorText}>
              {' '}
              {props.touched.name && props.errors.name}{' '}
            </Text>

            <TextInput
              style={styles.input}
              placeholder='email'
              onChangeText={props.handleChange('email')}
              value={props.values.email}
              onBlur={props.handleBlur('email')}
            />
            <Text style={styles.errorText}>
              {' '}
              {props.touched.email && props.errors.email}{' '}
            </Text>
            <TextInput
              style={styles.input}
              placeholder='password'
              onChangeText={props.handleChange('password')}
              value={props.values.password}
              onBlur={props.handleBlur('password')}
            />
            <Text style={styles.errorText}>
              {' '}
              {props.touched.password && props.errors.password}{' '}
            </Text>

            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                props.handleSubmit();
              }}
            >
              <Text style={styles.btnText}> Sign Up </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
      {console.log(user)}
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: {
    alignSelf: 'center',
    height: 350,
    width: 300,
    padding: 20,
    margin: 30,
    alignItems: 'center'
  },
  input: {
    height: 40,
    width: 250,
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: '#ddd',
    fontSize: 20,
    fontFamily: 'Oxygen_400Regular',
    borderRadius: 6
  },
  errorText: {
    fontFamily: 'Oxygen_700Bold',
    color: '#ba1f11',
    marginBottom: 8,
    marginTop: 8,
    textAlign: 'center'
  },
  btn: {
    borderRadius: 8,
    marginVertical: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#1D7253'
  },
  btnText: {
    color: 'white',
    fontFamily: 'Oxygen_700Bold',
    textTransform: 'uppercase',
    fontSize: 14,
    textAlign: 'center'
  }
});

export default formComponent;
