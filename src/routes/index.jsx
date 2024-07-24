
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';


import MainLayouts from '../layouts/MainLayouts';
import DashboardLayouts from "../layouts/DashboardLayouts";
import Dashboard from '../pages/dashboard';
import ContactPages from '../pages/contact';
import About from '../pages/about';
import Error404 from '../pages/404';
import HomePages from '../pages/home';
import ProductoPages from '../pages/productos';
import ConsultasPages from '../pages/consultas';
import EstadisticasPages from '../pages/estadisticas';
import SearchPages from '../pages/search';
import LoginPages from '../pages/login.jsx';
import RegisterPages from '../pages/register.jsx';
import LogoutPages from '../pages/logout.jsx';
import PropietariosPages from '../pages/propietarios.jsx';
import AnimalesPages from '../pages/animales.jsx';
import HistorialMedicoPages from '../pages/historial.jsx';
import CitasPages from '../pages/citas.jsx';
import RegistroPages from '../pages/registro.jsx';
import InventarioPages from '../pages/inventario.jsx';
import MascotasPages from '../pages/mascotas.jsx';

 const router = createBrowserRouter([

        { 
            path: "/", 
            element: <MainLayouts/>,
            errorElement: <Error404 />,
            children: [
                { path: "/", element: <HomePages/>},
                { path: '/login', element: <LoginPages/>},
                { path: '/logout', element: <LogoutPages/>},
                { path: '/register', element: <RegisterPages/>},
                { path: "/dashboard", element: <Dashboard/>},
                { path: "/inventario", element: <InventarioPages/>},
                { path: '/mascotas', element: < MascotasPages />},
                { path: '/animales', element: <AnimalesPages />},
                { path: '/historial', element: < HistorialMedicoPages />},
                { path: '/registro', element: <RegistroPages />},
                { path: "/productos", element: <ProductoPages/>},
                { path: '/citas', element: < CitasPages />},
                { path: "/consultas", element: <ConsultasPages/>},
                { path: "/estadisticas", element: <EstadisticasPages/>},
                { path: "/search", element: <SearchPages/>},
                { path: "/contactos", element: <ContactPages/>},
                { path: "/about", element: <About/>},
                

            ]
        },
       
        
  ])

  export default function MyRoutes() {
    return <RouterProvider router={router} />
  }