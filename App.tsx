// react imports
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// file imports
import MyTabs from "./navigation/MyTabs";
import MyStack from "./navigation/MyStack";

const App = () => {
  return (
    <SafeAreaProvider>
      <View>
        <View style={styles.container}></View>
        <MyStack />
      </View>
      <MyTabs />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  tabs: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
});

export default App;

{
  /* <View style={styles.logo}> logo</View>
<View style={styles.accountInfoContainer}>
  <Text style={styles.accountName}> Name: Joe Bloggs</Text>
  <Text style={styles.accountEmail}> Email: joe@bloggs.com</Text>
</View>
<View style={styles.pastTripsContainer}>
  <Text style={styles.info}>trip 1</Text>
  <Text style={styles.info}>trip 2</Text>
  <Text style={styles.info}>trip 3</Text>
  <Text style={styles.info}>trip 4</Text>
</View>

<TouchableOpacity
  style={styles.button}
  onPress={() => nav.navigate('LandingPage')}
>
  {' '}
  LogOut
</TouchableOpacity>

<TouchableOpacity
  style={styles.button}
  onPress={() => nav.navigate('LandingPage')}
>
  {' '}
  Delete Account
</TouchableOpacity> */
}
