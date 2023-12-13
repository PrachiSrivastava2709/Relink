import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NavbarWrapper from './components/NavbarWrapper';
import Landing from './pages/Landing';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Landing />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/user",
    element: <NavbarWrapper />,
    children: [
      {
        path: "/user/",
        element: <Home />
      }
    ]
  }
])

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
};
