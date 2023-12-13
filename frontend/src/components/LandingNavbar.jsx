import React from 'react';
import { Link } from 'react-router-dom';

export default function LandingNavbar() {
  return (
    <>
        <Link to={"/signup"}>Sign Up</Link>
        <br />
        <Link to={"/login"}>Sign In</Link>
        <br />
    </>
  )
}
