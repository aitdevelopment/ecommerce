 import React from 'react'
 import './App.css'
 import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
 import { Layout } from './pages/Layout.jsx';
 import Home from './pages/Home.jsx';
 import Singleplage from './pages/Singlepage.jsx';
 import Category from './pages/Category.jsx';
 import Notfound from './pages/Notfound.jsx';
import Wishlist from './category/Wishlist.jsx';
 


 const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:'/',
       element: <Home/>

      },
      {
        path:"/singlepage",
        element:<Singleplage/>
      },
      {
        path:"/category",
        element:<Category/>
      },
      {
        path:"/wishlist",
        element:<Wishlist/>
      },
      {
        path:"*",
        element:<Notfound/>
      }


    ]
  },
]);
 
 const App = () => {
   return (
    <RouterProvider router={router}>
 
</RouterProvider>
   )
 }
 
 export default App