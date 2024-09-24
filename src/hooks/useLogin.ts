import { useMutation } from '@tanstack/react-query'
import axiosInstance from '../api/axios';
import { setToken } from '../utils/localStorageToken';
import { useNavigate } from 'react-router-dom';


interface LoginData {
  username: string;
  password: string;
}

interface LoginResponse{
  token: string;
}

function login (data: LoginData) {
 return axiosInstance.post<LoginResponse>(`auth/login`, data);
};

const useLogin = () => {
    const navigate = useNavigate();
  const mutation =  useMutation({
        mutationKey: ['login'],
        mutationFn: login,
        onSuccess: (response) => {
            setToken(response.data.token);
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
            navigate('/')
        }
    })

    return mutation
}

export default useLogin