
import {  createBrowserRouter } from 'react-router-dom';


import MainLayouts from '..MainLayouts.jsx';
import Dashboard from '..dashboard.jsx';
import Contact from '..contact.jsx';

 const router = createBrowserRouter([

        { 
            path: "/", 
            element: <App/>
        },
        { 
            path: "/dashboard", 
            element: <Dashboard/>
        },
        { 
            path: "/contact", 
            element: <Contact/>
        },
        { 
            path: "/mainlayouts", 
            element: <MainLayouts/>
        },

  ])