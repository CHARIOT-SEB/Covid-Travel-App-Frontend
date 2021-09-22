import axios from 'axios';

const coromerApi = axios.create({
	baseURL: 'https://covid-travel-app-21.herokuapp.com/api',
});

export const getCountries = async () => {
	const { data } = await coromerApi.get('/countries');
	return data.countries;
};

export const getCountry = async (countryName: string) => {
	const { data } = await coromerApi.get(`/countries/${countryName}`);
	return data.country;
};

export const getUser = async (email: string, userObj: object) => {
	const { data } = await coromerApi.post(`/users/${email}`, userObj);
	console.log(data, 'data');
	return data;
};

export const patchTrips = async (trip: object, email: string) => {
	const { data } = await coromerApi.patch(`/users/${email}`, trip);
	return data.user;
};

/* trip: {
                    country: 'Ireland',
                    trafficLight: 'amber',
                    dateGoing: new Date(2022, 2, 28),     ---> These need to be sent in this format to the backend
                    dateReturning: new Date(2022, 3, 10), ---^
                    acceptingTourists: true, ---> Accepting Vaxxed or unvaxxed tourists?
                    vaccineRequired: true,   ---> Only accepting Vaxxed tourists
                    testRequired: true,      ---> Only if one box is ticked from with/without Vax
                    extraDocsRequired: true, ---> if length of docsRequired > 0
                    newInfo: false           ---> Not updated on the backend, can put in if you want
                  } */
