// USER SINGUP

import { ParamI } from "./interface";

export const LOGIN = "http://localhost:8080/auth/login"; // DONT Write https on local machine XD
export const LOGOUT = "http://localhost:8080/auth/logout";

export const PROJECTS = "http://localhost:8080/projects";
export const PROJECT = `${PROJECTS}/slug/:slug`;

export const POSTS = "http://localhost:8080/posts";
export const POST = `${POSTS}/slug/:slug`;

export const USER = "http://localhost:8080/auth/me";

export const fetchUrl = (url: string, param: ParamI) => {
  return url.replace(`:${param.name}`, param.value);
};
