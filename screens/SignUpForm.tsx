import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';

const SignUpForm = (props: any) => {
  const nav = props.navigation;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.logo}> logo</View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => nav.navigate('Home')}
        >
          Back
        </TouchableOpacity>
        <View style={styles.formContainer}>
          <Text> This is a form </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center'
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
  button: {
    flex: 1,
    backgroundColor: '#00ced1',
    height: 5,
    alignSelf: 'center',
    margin: 5,
    marginTop: 25,
    padding: 15,
    textAlign: 'center',
    borderRadius: 15
  },
  formContainer: {
    flex: 5,
    marginHorizontal: 10,
    marginVertical: 20,
    paddingHorizontal: 10,
    paddingVertical: 50,
    alignSelf: 'stretch',

    backgroundColor: '#f0e68c'
  }
});

export default SignUpForm;
