import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Routes,
} from "react-router-dom";
import { Home, SignUp, VerifyEmail, EmailLogic, SignIn, Dashboard } from "./pages";
import { PublicRoutes, PrivateRoutes } from "./components/main components";

import React from "react";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route element={<PublicRoutes />}>
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Route>
      <Route path="/verify-email" element={<VerifyEmail />} />
      <Route path="/emailverification/:token" element={<EmailLogic />} />
    </Route>
  )
);

function App({ routes }) {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
