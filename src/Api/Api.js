import axios from 'axios';

// Base URL for the API
const BASE_URL = "http://100-29-38-82:5000/api/";

// Create an Axios instance with default settings
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,  // 5 seconds timeout
});

export const loginCustomer = async (userName, password) => {
  try {
    console.log(userName, password, "hmm");
    const response = await apiClient.post(`/Customer/Login?UserName=${userName}&Password=${password}`);
    console.log(response,"response");
    return response;
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error('Server error:', error.response.status, error.response.data);
    } else if (error.request) {
      // Request was made but no response received
      console.error('No response received:', error.request);
    } else {
      // Something else happened while setting up the request
      console.error('Error setting up request:', error.message);
    }
    throw error;
  }
};

// Function to set the Authorization header for subsequent requests
export const setAuthToken = (token) => {
  if (token) {
    // If a token is provided, set it in the Authorization header
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    // If no token is provided, remove the Authorization header
    delete apiClient.defaults.headers.common['Authorization'];
  }
};
