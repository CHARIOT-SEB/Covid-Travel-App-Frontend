import React, { createContext, useState } from 'react';

// interface InitialState {
// 	userData: {};
// 	country: string;
// }

// create and export a new 'context'
export const dataStore = createContext({});

const dataProvider = ({ children }) => {
	// all states that need passing should sit here
	const [country, setCountry] = useState('');
	const [boo, setBoo] = useState(false);
	const [countries, setCountries] = useState([]);

	console.log(country, '<--------- in provider');

	// pass everything into 'value', so .Provider can provide everywhere in App
	return (
		<dataStore.Provider
			value={{ country, setCountry, boo, setBoo, countries, setCountries}}
		>
			{children}
		</dataStore.Provider>
	);
};

export default dataProvider;
