import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const login = async (data, calback) => {
    try {
      const response = await axios.post('https://fakestoreapi.com/auth/login', data);
      calback(true, response.data.token);
    } catch (error) {
      calback(false, error.response.data);
    }
}

export const getUsername = async (token) => {
  const decode = jwtDecode(token);
  return decode.user;
}