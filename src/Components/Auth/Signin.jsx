import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from "../subcomponents/assets/logo.png"

const Signin = () => {
  return (
    <div className="w-full mx-auto max-w-7xl">
      <NavLink to="/" className="">
        <img className="w-[5.5rem] h-[4.2rem]" src={logo} alt="" />
      </NavLink>
      <h1> Signin up page</h1>
    </div>
  );
}

export default Signin