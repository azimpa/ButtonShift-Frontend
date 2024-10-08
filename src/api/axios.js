import axios from 'axios';
import Cookies from 'js-cookie';  // To get the CSRF token from cookies

const instance = axios.create({
  baseURL: 'http://localhost:8000/',  // Django server base URL
  withCredentials: true,              // Include cookies in requests
});

// Add a request interceptor to inject CSRF token
instance.interceptors.request.use(config => {
  const csrfToken = Cookies.get('csrftoken');  // Get the CSRF token from the cookies
  if (csrfToken) {
    config.headers['X-CSRFToken'] = csrfToken;
  }
  return config;
});

export default instance;
