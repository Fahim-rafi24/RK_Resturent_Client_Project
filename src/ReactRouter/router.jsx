import { createBrowserRouter } from "react-router-dom";






const routerPath = createBrowserRouter([
    {
        path: "/",
        element: <div className='flex justify-center text-4xl items-center w-full h-[100vh]'>Welcome Here...</div>,
    },
]);

export default routerPath;