import axios from "./axios";


interface LoginData {
  username: string;
  password: string;
}

export const login = async (data: LoginData) => {
  return await axios.post(`auth/login`, data);
};
