import axios from "axios";
import {
  fetchUrl,
  LOGIN,
  LOGOUT,
  POST,
  POSTS,
  PROJECT,
  PROJECTS,
} from "../../constants/api";

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

export const projects = {
  findAll: async () => {
    try {
      const res = await fetch(PROJECTS);
      const data = await res.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  },
  findOne: async (value: string) => {
    try {
      const res = await fetch(
        fetchUrl(PROJECT, { name: "slug", value: value })
      );

      const data = await res.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  },
};

export const posts = {
  findAll: async () => {
    try {
      const res = await fetch(POSTS);
      const data = await res.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  },
  findOne: async (value: string | undefined) => {
    try {
      const res = await fetch(fetchUrl(POST, { name: "slug", value: value }));
      const data = await res.json();

      return data;
    } catch (error) {
      console.log(error);
    }
  },
};

export const logout = async () => {
  try {
    return await axios.post(LOGOUT);
  } catch (error) {
    console.log(error);
  }
};
