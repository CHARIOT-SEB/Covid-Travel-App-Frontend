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
	[isLoggedIn, setIsLoggedIn] = useState(false);
	[signUp, setSignUp] = useState(false);
  [user, setUser] = useState({});

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
				setSignUp,
			}}
		>
			{children}
		</dataStore.Provider>
	);
};

export default dataProvider;
