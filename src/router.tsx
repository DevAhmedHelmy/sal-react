// i want make route for login
import { createBrowserRouter, createRoutesFromElements ,Route} from "react-router-dom";
 
import Home from "./pages/home";
import ErrorPage from "./pages/error-page";
import AuthGuard from "./components/guards/AuthGuard";
import Auth from "./pages/Auth";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<AuthGuard/>}>
                <Route index element={<Home />} errorElement={<ErrorPage/>}/>
            </Route>
            <Route path="/login" element={<Auth />} errorElement={<ErrorPage/>}/>
        </>        
    )
//     [
//     {
//         path: "/",
//         element: <Home />,
//         errorElement: <ErrorPage/>
//     },
//     {
//         path: "/login",
//         element: <Login />,
//         errorElement: <ErrorPage/>
//     },
// ]
);

