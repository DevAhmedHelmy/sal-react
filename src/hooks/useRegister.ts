import { useMutation } from '@tanstack/react-query'
import axiosInstance from '../api/axios';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';


interface RegisterData {
  "first_name": string;
  "last_name":string,
  "email":string,
  "password":string,
  "username":string
}

interface RegisterResponse{
  "first_name": string;
  "last_name":string,
  "email":string,
  "password":string,
  "username":string,
  token:string
}

function register (data: RegisterData) {
 return axiosInstance.post<RegisterResponse>(`auth/register`, data);
};

const useRegister = () => {
    const navigate = useNavigate();
    const {onLogin} = useContext(AuthContext);
  const mutation =  useMutation({
        mutationKey: ['register'],
        mutationFn: register,
        onSuccess: (response) => {
          onLogin(response.data.token)
            navigate('/')
        }
    })

    return mutation
}

export default useRegister