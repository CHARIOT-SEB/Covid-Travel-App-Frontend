import React, { useState, useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Button
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

const userSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().min(4).max(10).required()
  // can do a .matches(takes a regex for password rules)
  // can do a .test(takes 3 args, name of func, message to user, function to test input)
});
const formComponent = () => {
  const [user, setUser] = useState({
    name: 'Bob',
    email: 'bob@cat.com',
    password: 'ghj'
  });
  const { isLoading, setIsLoading } = useContext(dataStore);

  const [fontsLoaded] = useFonts({
    Oxygen_300Light,
    Oxygen_400Regular,
    Oxygen_700Bold
  });

  {
    if (isLoading || !fontsLoaded) return <Spinner color='#0aa33a' />;
  }

  return (
    <View style={styles.formContainer}>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={userSchema}
        onSubmit={(values, actions) => {
          setUser(values);
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
