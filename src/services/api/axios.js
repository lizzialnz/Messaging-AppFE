import axios from 'axios';


const axiosPublic = axios.create();
const axiosPrivate = axios.create();
// como acceder a una variable de entorno en react

axiosPublic.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axiosPrivate.defaults.baseURL = process.env.REACT_APP_BASE_URL;
axiosPublic.get('/authapi/security').then((response) => {
  axiosPublic.defaults.headers.common['apikey'] = response.data;
});

axiosPrivate.get('/authapi/security').then((response) => {
  axiosPrivate.defaults.headers.common['apikey'] = response.data;
});

axiosPublic.defaults.headers.common['cache-control'] = 'no-cache';
axiosPrivate.defaults.headers.common['cache-control'] = 'no-cache';

axiosPublic.defaults.headers.common['Content-Type'] = 'application/json';
axiosPrivate.defaults.headers.common['Content-Type'] = 'application/json';

const setAuth = (jwt) => {
  axiosPrivate.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;
}

export {
  axiosPublic,
  axiosPrivate,
  setAuth
}