import React, { createContext, useState } from 'react';

// create and export a new 'context'
export const dataStore = createContext({});

const dataProvider = ({ children }) => {
  // all states that need passing should sit here

  let countryName,
    setCountryName,
    countries,
    setCountries,
    isLoading,
    setIsLoading,
    countryInfo,
    setCountryInfo,
    user,
    setUser,
    loginInfo,
    setLoginInfo,
    isLoggedIn,
    setIsLoggedIn,
    signUp,
    setSignUp: any;

  [countryName, setCountryName] = useState('');
  [countries, setCountries] = useState([]);
  [isLoading, setIsLoading] = useState(false);
  [countryInfo, setCountryInfo] = useState({});
  [isLoggedIn, setIsLoggedIn] = useState(true);
  [signUp, setSignUp] = useState(false);
  [user, setUser] = useState({
    name: 'John Smith',
    email: 'js@google.com',
    trips: [
      {
        country: 'france',
        trafficLight: 'amber',
        dateGoing: '2022-01-12T00:00:00.000Z',
        dateReturning: '2022-01-24T00:00:00.000Z',
        acceptingTourists: true,
        vaccineRequired: true,
        testRequired: true,
        extraDocsRequired: true,
        newInfo: false
      },
      {
        country: 'greece',
        trafficLight: 'amber',
        dateGoing: '2022-05-02T23:00:00.000Z',
        dateReturning: '2022-05-09T23:00:00.000Z',
        acceptingTourists: true,
        vaccineRequired: true,
        testRequired: true,
        extraDocsRequired: true,
        newInfo: true
      }
    ],
    pastTrips: [
      {
        country: 'poland',
        dateGoing: '2021-12-02T00:00:00.000Z',
        dateReturning: '2021-12-06T00:00:00.000Z'
      }
    ]
  });

  // pass everything into 'value', so .Provider can provide everywhere in App
  return (
    <dataStore.Provider
      value={{
        countries,
        setCountries,
        countryName,
        setCountryName,
        countryInfo,
        setCountryInfo,
        isLoading,
        setIsLoading,
        user,
        setUser,
        isLoggedIn,
        setIsLoggedIn,
        signUp,
        setSignUp
      }}
    >
      {children}
    </dataStore.Provider>
  );
};

export default dataProvider;
