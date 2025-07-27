import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";

import HomePage from './Pages/HomePage'
import Services from './Pages/Services'
import AboutUserPage from './Pages/AboutUserPage'
import NotFound from './Pages/NotFound'
import Seo from './Pages/Seo'
import Layout from './Layout/Layout'
const App = () => {
 
   const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        <Route index element={<HomePage />} />
        <Route path="services" element={<Services />} />
        <Route path="seo" element={<Seo />} />
      
        <Route path="aboutUserPage/:id" element={<AboutUserPage />} />
        <Route path="*" element={<NotFound />} />

      </Route>
    )
  )
  return (
   <div className="">
  
      <RouterProvider router={router} />
    </div>
  )
}

export default App
