import axios from "axios";
import { LOGIN, LOGOUT } from "../../constants/api";

export const login = async (input: any) => {
  try {
    return await axios.post(LOGIN, {
      email: input.email,
      password: input.password,
    });
  } catch (error: any) {
    return error.response.status;
  }
};

export const logout = async () => {
  try {
    return await axios.post(LOGOUT);
  } catch (error) {
    console.log(error);
  }
};
