// react imports
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, Button } from "react-native";
// file imports
import CountryPicker from "../navigation/CountryPicker";

interface State {
  location: {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  };
}

const Home: React.FC<State> = (navigation: any) => {
  const [location, setLocation] = useState({});

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text>The Covid-19 Travel App Name</Text>
        <Button title='My Trips' onPress={() => navigation.navigate("Trips")} />
        <CountryPicker location={location} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
