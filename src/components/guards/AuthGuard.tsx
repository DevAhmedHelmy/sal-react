import { Navigate, Outlet } from "react-router-dom";
import { hasToken } from "../../utils/localStorageToken.ts"


const AuthGuard = () => {

    const isLoggedIn = hasToken();

    if(!isLoggedIn){
        return <Navigate to="/login"  replace/>
    }

  return <Outlet/>
}

export default AuthGuard