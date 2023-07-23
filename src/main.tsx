import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
// borrramos el import './index.css'   casi no se usa
//creacion del router
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Peliculas from './screens/Peliculas.tsx';
import Bar from './screens/Bar.tsx';
//import Navabr from './components/Navbar.tsx';
//aqui pasamos las rutas

const router = createBrowserRouter([

  
  {
    path:"/",
    element: <App/>,
  },

  
  {
    path:"/Peliculas",
    element: <Peliculas/>,
  },
  
  {
    path:"/Bar",
    element: <Bar/>,
  }
    
  ]); 


  //<App/>
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider  router = {router}/>
    
  </React.StrictMode>,
)
