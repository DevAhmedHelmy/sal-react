import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../api/axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

interface LoginData {
  username: string;
  password: string;
}

interface LoginResponse {
  token: string;
}

const login = (data: LoginData) => {
  return axiosInstance.post<LoginResponse>(`auth/login`, data);
};

const useLogin = () => {
  const navigate = useNavigate();
  const { onLogin } = useContext(AuthContext);
  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: (response) => {
      onLogin(response.data.token);
      navigate("/");
    },
  });

  return mutation;
};

export default useLogin;
