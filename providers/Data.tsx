import React, { createContext, useState } from 'react';

// create and export a new 'context'
export const dataStore = createContext({});

const dataProvider = ({ children }) => {


	// all states that need passing should sit here
  let countryName, setCountryName, countries, setCountries, isLoading, setIsLoading, countryInfo, setCountryInfo, user, setUser, loginInfo, setLoginInfo: any
	[countryName, setCountryName] = useState('');
	[countries, setCountries] = useState([]);
	[isLoading, setIsLoading] = useState(false);
	[countryInfo, setCountryInfo] = useState({});
  [user, setUser] = useState({});
  [loginInfo, setLoginInfo] = useState({});

	// pass everything into 'value', so .Provider can provide everywhere in App
	return (
		<dataStore.Provider
			value={{ countries, setCountries, countryName, setCountryName, countryInfo, setCountryInfo, isLoading, setIsLoading, user, setUser, loginInfo, setLoginInfo }}>
			{children}
		</dataStore.Provider>
	);
};

export default dataProvider;
