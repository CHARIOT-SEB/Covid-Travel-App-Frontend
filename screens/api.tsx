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

export const postNewAccount = async (user: any) => {
  const { data } = await coromerApi.post('/users', user);
  return data.user;
};

export const patchTrips = async (trip: object, email: string) => {
	const { data } = await coromerApi.patch(`/users/${email}`, { trip });
	return data.user;
};
