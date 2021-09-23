import React, { useContext } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';
import Logo from '../components/Logo';
import { dataStore } from '../providers/Data';
import * as yup from 'yup';
import { Formik } from 'formik';
import { postNewAccount } from '../screens/api';
import { useNavigation } from '@react-navigation/native';
import { useFonts, Oxygen_400Regular } from '@expo-google-fonts/oxygen';
import { Spinner } from 'native-base';

const userSchema = yup.object({
  name: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().min(4).max(10).required()
});

const SignUpForm = (props: any) => {
  if (isLoggedIn) return null;

  const nav = useNavigation();

  const { isLoggedIn, setSignUp, setUser, user, setIsLoggedIn, signUp } =
    useContext(dataStore);

  const addAccount = (user: any) => {
    postNewAccount(user)
      .then((data) => {
        setUser(data);
        setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [fontsLoaded] = useFonts({
    Oxygen_400Regular
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Spinner />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo}>
        <Logo />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.text}>Join now!</Text>
        <Formik
          initialValues={{ name: '', email: '', password: '' }}
          validationSchema={userSchema}
          onSubmit={(values, actions) => {
            addAccount(values);
            actions.resetForm();
            setSignUp(false);
          }}
        >
          {(props) => (
            <View>
              <Text
                style={{
                  fontFamily: 'Oxygen_400Regular',
                  marginLeft: 10,
                  marginBottom: 5
                }}
              >
                Name
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Name"
                onChangeText={props.handleChange('name')}
                value={props.values.name}
                onBlur={props.handleBlur('name')}
              />
              <Text style={styles.errorText}>
                {' '}
                {props.touched.name && props.errors.name}{' '}
              </Text>

              <Text
                style={{
                  fontFamily: 'Oxygen_400Regular',
                  marginLeft: 10,
                  marginBottom: 5
                }}
              >
                Email
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onChangeText={props.handleChange('email')}
                value={props.values.email}
                onBlur={props.handleBlur('email')}
              />
              <Text style={styles.errorText}>
                {' '}
                {props.touched.email && props.errors.email}{' '}
              </Text>

              <Text
                style={{
                  fontFamily: 'Oxygen_400Regular',
                  marginLeft: 10,
                  marginBottom: 5
                }}
              >
                Password
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Password"
                onChangeText={props.handleChange('password')}
                value={props.values.password}
                onBlur={props.handleBlur('password')}
                secureTextEntry
              />
              <Text style={styles.errorText}>
                {props.touched.password && props.errors.password}
              </Text>

              <TouchableOpacity
                style={styles.btn}
                onPress={() => {
                  props.handleSubmit();
                  // setIsLoggedIn(true);
                  nav.navigate('Home');
                }}
              >
                <Text style={styles.btnText}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          )}
        </Formik>

        <View>
          <Button
            title="Back"
            onPress={() => {
              setSignUp(false);
            }}
          />
          {/* <TouchableOpacity style={styles.btn} onPress={console.log('hey')}>
						<Text style={styles.btnText}>Back</Text>
					</TouchableOpacity> */}
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#DCEFF9'
  },
  formContainer: {
    alignItems: 'center'
    // borderWidth: 3,
    // borderColor: 'black',
    // borderRadius: 6,
  },
  logo: {
    alignItems: 'center',
    marginBottom: 100,
    padding: 20,
    backgroundColor: '#DCEFF9'
  },
  input: {
    width: 300,
    height: 40,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: '#ddd',
    fontSize: 18,
    borderRadius: 10
  },
  text: {
    fontFamily: 'Oxygen_400Regular',
    fontSize: 20
  },
  errorText: {
    fontFamily: 'Oxygen_400Regular',
    color: 'crimson',
    fontWeight: 'bold',
    marginBottom: 3,
    marginTop: 3,
    textAlign: 'center'
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

export default SignUpForm;
