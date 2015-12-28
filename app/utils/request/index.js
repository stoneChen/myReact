import axios from 'axios';
import { showLoading, hideLoading } from 'components/Loading/action';
import store from 'base/store';

axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  store.dispatch(showLoading());
  console.log('showLoading');
  return config;
}, function (error) {
  // Do something with request error
  store.dispatch(hideLoading());
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Do something with response data
  store.dispatch(hideLoading());
  console.log('hideLoading');
  return response;
}, function (error) {
  // Do something with response error
  store.dispatch(hideLoading());
  return Promise.reject(error);
});

export default axios;
