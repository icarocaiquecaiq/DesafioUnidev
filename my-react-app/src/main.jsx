import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom'


// páginas
import Home from "./routes/Home/Home.jsx"
import Entrar from './routes/Entrar/Entrar.jsx'
import Registrar from './routes/Registrar/Registrar.jsx'
import AddNovoEvento from './routes/addNovoEvento/AddNovoEvento.jsx'
import RemoverEventos from './routes/RemoverEventos/RemoverEventos.jsx'
import EditarEvento from './routes/EditarEvento/EditarEvento.jsx'
import SelecionarEvento from './routes/EditarEvento/SelecionarEvento.jsx'


const router = createBrowserRouter(
  [
    {
      element: <App></App>,
      children: [
                  {
                    path: "/",
                    element: <Home></Home>
                  },
                  {
                    path: "entrar/",
                    element: <Entrar></Entrar>
                  },
                  {
                    path: "registrar/",
                    element: <Registrar></Registrar>
                  },
                  {
                    path: "addEvento",
                    element: <AddNovoEvento></AddNovoEvento>
                  },
                  {
                    path: "removerEvento",
                    element: <RemoverEventos></RemoverEventos>
                  },
                  {
                    path: "editarEvento",
                    element: <EditarEvento></EditarEvento>
                  },
                  {
                    path: "selectedEvento",
                    element: <SelecionarEvento></SelecionarEvento>
                  }
                ]
    }
  ]
)

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
