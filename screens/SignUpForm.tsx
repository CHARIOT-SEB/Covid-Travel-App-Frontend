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
import FormComponent from '../components/formComponent';
import Logo from '../components/Logo';
import { Spinner } from 'native-base';
import {
  useFonts,
  Oxygen_300Light,
  Oxygen_400Regular,
  Oxygen_700Bold
} from '@expo-google-fonts/oxygen';
import { dataStore } from '../providers/Data';

const SignUpForm = (props: any) => {
  const [fontsLoaded] = useFonts({
    Oxygen_300Light,
    Oxygen_400Regular,
    Oxygen_700Bold
  });
  const { isLoading, setIsLoading } = useContext(dataStore);
  const nav = props.navigation;

  {
    if (isLoading || !fontsLoaded) return <Spinner color='#0aa33a' />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoBox}>
        <Logo style={styles.logo} />
      </View>

      <FormComponent />
      <View style={styles.formContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            nav.navigation('Home');
          }}
        >
          <Text style={styles.btnText}> Back </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCEFF9',
    alignItems: 'center',
    justifyContent: 'center'
  },
  formContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#DCEFF9'
  },
  logoBox: {
    height: 30,
    padding: 10,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 35
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
    fontSize: 12,
    textAlign: 'center'
  }
});

export default SignUpForm;
