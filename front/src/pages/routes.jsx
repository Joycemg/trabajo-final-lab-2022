import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Home from './home/Home';
import Login from './login/Login';
import Vuelos from './vuelos/Vuelos';
import Pasaje from './pasaje/Pasaje';

import CompraPasaje from './compraPasaje/compraPasaje';
import Registro from './registrar/Registro';
import Datos from './Datos/Datos';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'vuelos',
        element: <Vuelos />,
      },
      {
        path: 'pasaje',
        element: <Pasaje />,
      },

      {
        path: 'compraPasaje',
        element: <CompraPasaje />,
      },
      {
        path: 'asiento',
        element: <Asientos />,
      },
      {
        path: 'datos',
        element: <Datos />,
      },
    ],
  },
  { path: '/login', element: <Login /> },
  {
    path: 'register',
    element: <Registro />,
  },
]);

export default router;
