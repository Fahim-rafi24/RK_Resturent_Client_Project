import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";






const routerPath = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <div>hi</div>,
            },
        ],
    },
    {
        path: "/login",
        element: <div>Login</div>,
    },
    {
        path: "/register",
        element: <div>Register</div>,
    },
]);

export default routerPath;