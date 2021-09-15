import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Account = (props: any) => {
  const nav = props.navigation;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.info}>Covid-19-Travel-App</Text>
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
  logo: {
    flex: 1,
    height: 20,
    padding: 20,
    margin: 10,
    borderRadius: 80,
    alignItems: "stretch",
    backgroundColor: "#5f9ea0",
  },
  accountInfoContainer: {
    margin: 20,
    flex: 1,
    backgroundColor: "#ffd700",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  accountName: {
    alignSelf: "flex-start",
  },
  accountEmail: {
    alignSelf: "flex-start",
  },
  info: {
    margin: 2,
    position: "absolute",
    alignSelf: "center",
    padding: 10,
  },
  pastTripsContainer: {
    flex: 6,
    alignSelf: "stretch",
    margin: 10,
    marginTop: 15,
    padding: 5,
    backgroundColor: "#dcdcdc",
  },
  button: {
    flex: 1,
    backgroundColor: "#00ced1",
    height: 5,
    alignSelf: "center",
    margin: 5,
    marginTop: 25,
    padding: 15,
    textAlign: "center",
    borderRadius: 15,
  },
});

export default Account;
