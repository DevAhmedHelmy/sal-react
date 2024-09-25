import { useState,ReactNode, useEffect } from "react";
import { getLocalStorageToken, removeLocalStorageToken, setLocalStorageToken } from "../../utils/localStorageToken";
import axiosInstance from "../../api/axios";
import AuthContext from "../../context/AuthContext";


function setAxiosToken(token?:string){
    axiosInstance.defaults.headers.common.Authorization = token ? `Bearer ${token}`:undefined
}

const AuthStateProvider = ({children}:{children:ReactNode})=>{
    const [token,setToken] = useState<string|null>(null);
    const isAuth = !!token;



useEffect(()=>{
    const localStorageToken = getLocalStorageToken();
    if(localStorageToken){
        setToken(localStorageToken);
        setAxiosToken(localStorageToken)
    }
},[])

    function onLogin(tokenData :string){
            setToken(tokenData);
            setLocalStorageToken(tokenData)
            setAxiosToken(tokenData)
    }

    function onLogout(){
        setToken(null);
        setAxiosToken(undefined);
        removeLocalStorageToken();
    }
    return (
        <AuthContext.Provider value={{isAuth,onLogin,onLogout}}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthStateProvider;