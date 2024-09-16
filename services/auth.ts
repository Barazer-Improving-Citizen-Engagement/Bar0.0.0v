// services/auth.ts
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const API_URL = 'https://your-api-url.com'; // Replace with your actual API URL

export const signUp = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/signup`, { email, password });
    return response.data;
  } catch (error) {
    throw new Error('Sign Up failed');
  }
};
export const Logout = () => {
  return async (dispatch) => {
    await AsyncStorage.clear();
    dispatch({
      type: "LOGOUT",
    });
  };
};

export const login = async (email: string, password: string) => {
  return async (dispatch) => {
    let token = null;
    // const DB_NAME = ""
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password }

    );
    const setCookieHeader = response.headers["set-cookie"];
    const cookie = setCookieHeader[0];
    const sessionId = cookie.split(",")[0].split("=")[1];
    await AsyncStorage.setItem("token", sessionId);
    await dispatch({
      type: "LOGIN",
      payload: sessionId,
    });
    await dispatch({
      type: "USER",
      payload: response.data,
    })
  } catch (error) {
    throw new Error('Login failed');
  }
};
};
