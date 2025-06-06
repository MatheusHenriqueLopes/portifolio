import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'


// Pages
import Home from './routes/Home.jsx'
import Skiil from './routes/Skiil.jsx'
import Porti from './routes/Porti.jsx'


const router = createBrowserRouter([

  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", element: <Home />
      },
      {
        path: "/skills", element: <Skiil />
      },
      {
        path: "/portfolio", element: <Porti />
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
