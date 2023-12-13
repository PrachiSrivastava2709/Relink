import React from 'react';
import NavBar from './Navbar';
import { Outlet } from 'react-router-dom';

export default function NavbarWrapper() {
  return (
    <>
        <NavBar />
        <Outlet />
    </>
  )
}
