



import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

import Home from './routes/Home/Home.jsx'
import Error from './routes/Error/Error.jsx'
import Projects from './routes/Projects/Projects.jsx'


const router = createBrowserRouter([
  {
    path:'/', element: <App/>,
    errorElement: <Error/>,
    children: [
      {path: '/', element: <Home/>},
      {path: '/projects', element: <Projects/>},      
    ]
  },
])



ReactDOM.createRoot(document.getElementById('root')).render(
  
    <RouterProvider router={ router }/>,
 
)
