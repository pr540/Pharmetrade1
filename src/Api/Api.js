import axios from 'axios';

// Base URL for the API
const BASE_URL = "http://ec2-100-29-38-82.compute-1.amazonaws.com:5000/";

// Create an Axios instance with default settings
const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to log in a customer and store the token
export const loginCustomer = async (userName, password) => {
  try {
    // Make a POST request to the login endpoint with the username and password
    const response = await apiClient.post(`/Customer/Login`, null, {
      params: {
        UserName: encodeURIComponent(userName),
        Password: encodeURIComponent(password)
      }
    });

    // Extract the token from the response data
    const { token } = response.data;

    // Save the token to local storage or any other secure storage mechanism
    localStorage.setItem('accessToken', token);

    // Return the token
    return token;
  } catch (error) {
    // Log and rethrow the error for further handling
    console.error('Error logging in customer:', error);
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