import axios from 'axios';

const API = axios.create({
	baseURL: 'https://nt-shopping-list.onrender.com/api',
});

API.interceptors.request.use(req => {
	if (localStorage.getItem('token')) {
		req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
	}
	return req;
});

API.interceptors.response.use(
	res => res,
	err => {
		if (err.response.status === 401) {
			localStorage.removeltem('token');
			window.location.href = '/login';
		}
		return Promise.reject(err);
	}
);

export default API;
