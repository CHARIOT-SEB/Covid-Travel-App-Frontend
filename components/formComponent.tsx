import React from 'react';
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

const formComponent = () => {
  return (
    <View style={styles.formContainer}>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(props) => (
          <View>
            <TextInput
              style={styles.input}
              placeholder='name'
              onChangeText={props.handleChange('name')}
              value={props.values.name}
            />

            <TextInput
              style={styles.input}
              placeholder='email'
              onChangeText={props.handleChange('email')}
              value={props.values.email}
            />

            <TextInput
              style={styles.input}
              placeholder='password'
              onChangeText={props.handleChange('password')}
              value={props.values.password}
            />

            <Button
              title='submit'
              color='red'
              onPress={() => {
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
  formContainer: {
    height: 300,
    width: 300,
    padding: 20,
    margin: 50,
    alignItems: 'stretch',
    borderColor: 'red',
    borderWidth: 1
  },
  input: {
    height: 30,
    alignItems: 'stretch',
    backgroundColor: '#dcdcdc',
    borderWidth: 3,
    borderColor: '#ddd',
    padding: 10,
    margin: 10,
    fontSize: 18,
    borderRadius: 6
  }
});

export default formComponent;
