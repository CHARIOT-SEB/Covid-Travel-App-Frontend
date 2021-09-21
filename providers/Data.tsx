import React, { createContext, useState } from 'react';

// create and export a new 'context'
export const dataStore = createContext({});

const dataProvider = ({ children }) => {


	// all states that need passing should sit here
<<<<<<< HEAD
    let countryName, setCountryName, countries, setCountries, isLoading, setIsLoading, countryInfo, setCountryInfo, isLoggedIn, setIsLoggedIn: any
=======
  let countryName, setCountryName, countries, setCountries, isLoading, setIsLoading, countryInfo, setCountryInfo, user, setUser, loginInfo, setLoginInfo: any
>>>>>>> 17a4857fa79843486d1cd61f37d0f45c85147ceb
	[countryName, setCountryName] = useState('');
	[countries, setCountries] = useState([]);
	[isLoading, setIsLoading] = useState(false);
	[countryInfo, setCountryInfo] = useState({});
<<<<<<< HEAD
    [isLoggedIn, setIsLoggedIn] = useState(true);

    console.log(isLoggedIn, "Logged In?")
=======
  [user, setUser] = useState({});
  [loginInfo, setLoginInfo] = useState({});
>>>>>>> 17a4857fa79843486d1cd61f37d0f45c85147ceb

	// pass everything into 'value', so .Provider can provide everywhere in App
	return (
		<dataStore.Provider
<<<<<<< HEAD
			value={{ countries, setCountries, countryName, setCountryName, countryInfo, setCountryInfo, isLoading, setIsLoading, isLoggedIn, setIsLoggedIn}}
		>
=======
			value={{ countries, setCountries, countryName, setCountryName, countryInfo, setCountryInfo, isLoading, setIsLoading, user, setUser, loginInfo, setLoginInfo }}>
>>>>>>> 17a4857fa79843486d1cd61f37d0f45c85147ceb
			{children}
		</dataStore.Provider>
	);
};

export default dataProvider;
