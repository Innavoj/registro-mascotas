
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';


import MainLayouts from '../layouts/MainLayouts';
import DashboardLayouts from "../layouts/DashboardLayouts";
import Dashboard from '../pages/dashboard';
import Contact from '../pages/contact';
import About from '../pages/about';
import Error404 from '../pages/404';

 const router = createBrowserRouter([

        { 
            path: "/", 
            element: <MainLayouts/>,
            errorElement: <Error404 />,
            children: [
                { path: "/contact", element: <Contact/>},
                { path: "/about", element: <About/>}
            ]
        },
        { 
            path: "dashboard", 
            element: <Dashboard/>,
            children: [
                { path: "/dashboard", element: <Dashboard/>}
            ]
        },
        
  ])

  export default function MyRoutes() {
    return <RouterProvider router={router} />
  }