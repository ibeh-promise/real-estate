import React from "react";
import {  Link } from 'react-router-dom';

export default function Header() {
    return (
    <div className="navbar px-10 lg:px-20 bg-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li className="font-500"><Link to={"/"}/>Home</li>
        <li className="font-500"><Link to={"/"}/>How It Works</li>
        <li className="font-500"><Link to={"/"}/>Agents</li>
        <li className="font-500"><Link to={"/"}/>Testimonies</li>
      </ul>
    </div>
    <a className="btn-ghost text-xl text-blue-700 font-semibold">Real Estate</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li className="font-500 px-4 font-semibold"><Link to={"/"}/>Home</li>
        <li className="font-500 px-4 font-semibold"><Link to={"/"}/>How It Works</li>
        <li className="font-500 px-4 font-semibold"><Link to={"/"}/>Agents</li>
        <li className="font-500 px-4 font-semibold"><Link to={"/"}/>Testimonies</li>
    </ul>
  </div>
  <div className="navbar-end ">
    <a className="btn font-semibold text-white bg-blue-700">Contact Us</a>
  </div>
</div>
    )
}