import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {

    const links = <>
       <NavLink to='/'className={({ isActive }) => isActive ? "text-[#23BE0A] border-1 border-[#23BE0A] rounded font-semibold px-2" : ""}> <li className='m-4 text-xl'>Home</li></NavLink>
       <NavLink to='/readList' className={({ isActive }) => isActive ? "text-[#23BE0A] border-1 border-[#23BE0A] rounded font-semibold px-2" : ""}> <li className='m-4 text-xl'>Listed Books</li></NavLink>
       <NavLink to='/read' className={({ isActive }) => isActive ? "text-[#23BE0A] border-1 border-[#23BE0A] rounded font-semibold px-2" : ""}> <li className='m-4 text-xl'>Pages to Read</li></NavLink>
        </>
    return (
        <div className="navbar mb-5 md:mb-8 lg:mb-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
      </ul>
    </div>
    <h2 className="text-xl md:text-2xl lg:text-2xl font-bold">Book Vibe</h2>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end gap-2">
    <button className="btn bg-[#23BE0A] font-bold text-white">Sign In</button>
    <button className="btn bg-[#59C6D2] font-bold text-white">Sign Up</button>
  </div>
</div>
    );
};

export default Navbar;