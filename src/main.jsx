import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './GlobalStyled'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Navbar from './components/Nav/Nav'
import Home from './pages/Home/Home'
import Search from './pages/Search/Search'

import Authentication from './pages/Authentication/Authentication'
const router = createBrowserRouter([

{

 path: '/',
 element: <Navbar/>,
 errorElement: <ErrorPage/>,
 children: [

  {
    path:'/',
    element: <Home/>,
  },
  {
    path:'/search/:title',
    element: <Search/>,
  }


 ]
},
{

  path:'/auth',
  element: <Authentication/>
}

])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)


