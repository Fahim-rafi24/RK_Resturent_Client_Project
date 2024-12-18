import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Form/Login/Login";
import Register from "../Pages/Form/Register/Register";
import OurMenu from "../Pages/OurManu/OurMenu";
import ContactUs from "../Pages/ContactUs/ContactUs";
import OurShop from "../Pages/OurShop/OurShop";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoot from "../PrivateRoot/PrivateRoot";
import AdminDashBoard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import Users from "../Pages/Dashboard/AdminDashboard/pages/Users";




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
            {
                path: "/contact_us",
                element: <PrivateRoot><ContactUs></ContactUs></PrivateRoot>,  // private page
            },
            {
                path: "/our_menu",
                element: <OurMenu></OurMenu>,
            },
            {
                path: "/our_shop",
                element: <OurShop></OurShop>,
            },
            {
                path: "/dashboard",
                element: <PrivateRoot><Dashboard></Dashboard></PrivateRoot>,  // private page
            },
        ],
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/register",
        element: <Register></Register>,
    },
    {
        path: "/admin/dashboard",
        element: <AdminDashBoard></AdminDashBoard>,
        children: [
            {
                path: '/admin/dashboard',
                element: <Users></Users>,
            }
        ],
    },
]);

export default routerPath;