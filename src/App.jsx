import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Routes } from "react-router-dom";
<<<<<<< HEAD
import { EmailLogic, Home, SignIn, SignUp, VerifyEmail } from './pages';
=======
import { Home, SignUp, VerifyEmail, EmailLogic, SignIn } from './pages';
>>>>>>> 0619da6 (autheticating redone and completed)

import React from 'react';




const router = createBrowserRouter(
  createRoutesFromElements(
  
    <Route path='/' >
      <Route index element={<Home />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/verify-email"  element={<VerifyEmail />}/>
      <Route path="/emailverification/:token" element={<EmailLogic />} />
      <Route path="/sign-in" element={<SignIn />} />
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
