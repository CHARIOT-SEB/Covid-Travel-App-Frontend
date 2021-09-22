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

export const postNewAccount = async (user) => {
	const { data } = await coromerApi.post('/users', user);
	return data.user;
};