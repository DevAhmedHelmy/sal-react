import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../context/AuthContext";



const AuthGuard = () => {

    const {isAuth} = useContext(AuthContext);

    if(!isAuth){
        return <Navigate to="/login"  replace/>
    }

  return <Outlet/>
}

export default AuthGuard