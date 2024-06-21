
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Routes } from "react-router-dom";
import { Home } from './pages';

import React from 'react';



const router = createBrowserRouter(
  createRoutesFromElements(
  
    <Route path='/' >
      <Route index element={<Home />} />
    </Route>
   
  )
)

function App({routes}) {
  
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
