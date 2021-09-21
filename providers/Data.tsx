import React, { createContext, useState } from 'react';

// create and export a new 'context'
export const dataStore = createContext({});

const dataProvider = ({ children }) => {

	// all states that need passing should sit here
    let countryName, setCountryName, countries, setCountries, isLoading, setIsLoading, countryInfo, setCountryInfo: any
	[countryName, setCountryName] = useState('');
	[countries, setCountries] = useState([]);
	[isLoading, setIsLoading] = useState(false);
	[countryInfo, setCountryInfo] = useState({});

	// pass everything into 'value', so .Provider can provide everywhere in App
	return (
		<dataStore.Provider
			value={{ countries, setCountries, countryName, setCountryName, countryInfo, setCountryInfo, isLoading, setIsLoading }}
		>
			{children}
		</dataStore.Provider>
	);
};

export default dataProvider;

// const [state, dispatch] = React.useReducer(reducer, initialState);
// const value = { state, dispatch };
// return <Store.Provider value={value as MyContextType}>{props.children}</Store.Provider>;
