import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";






const routerPath = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
        ],
    },
    {
        path: "/login",
        element: <div>Login comming...</div>,
    },
    {
        path: "/register",
        element: <div>Register comming...</div>,
    },
]);

export default routerPath;