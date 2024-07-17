import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,createHashRouter, RouterProvider } from 'react-router-dom'
import Home from './webpage/Home.jsx'
import POne from './webpage/POne.jsx'
import PZero from './webpage/PZero.jsx'
import Energy from './webpage/Energy.jsx'
const router = createHashRouter([
  {path:'', element:<App/>, children:([
    {path:'', element:<Home/>},
  {path:'/energy', element:<Energy/>},
  ])},
  {path:'/project-one', element:<POne/>},
  {path:'/project-zero', element:<PZero/>},


  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
