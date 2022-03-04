import React, { useState } from "react";
import { FaBars, FaMixer } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import Flags from "country-flag-icons/react/1x1";

function Header() {
  const [toggleMenu, settoggleMenu] = useState(false);
  const [toggleLang, settoggleLang] = useState(false);

  const MenuList = () => (
    <>
      <div className="h-0.5 bg-slate-400 w-full block md:hidden my-3" />
      <ul className="flex flex-col space-y-3 md:space-y-0 space-x-0 md:space-x-3 px-5 md:flex-row  bg-white w-full   ">
        <li>
          <NavLink
            to="/"
            className="hover:text-blue-500 font-normal hover:font-semibold text-lg cursor-pointer  text-left md:text-center tracking-tight "
            activeClassName="text-blue-500 font-semibold"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className="hover:text-blue-500 font-normal hover:font-semibold text-lg cursor-pointer  text-left md:text-center tracking-tight "
            activeClassName="text-blue-500 font-semibold"
          >
            About the Project
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className="hover:text-blue-500 font-normal hover:font-semibold text-lg cursor-pointer  text-left md:text-center tracking-tight "
            activeClassName="text-blue-500 font-semibold"
          >
            Objectives
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className="hover:text-blue-500 font-normal hover:font-semibold text-lg cursor-pointer  text-left md:text-center tracking-tight "
            activeClassName="text-blue-500 font-semibold"
          >
            Manuals & Modules
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className="hover:text-blue-500 font-normal hover:font-semibold text-lg cursor-pointer  text-left md:text-center tracking-tight "
            activeClassName="text-blue-500 font-semibold"
          >
            Events & News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className="hover:text-blue-500 font-normal hover:font-semibold text-lg cursor-pointer  text-left md:text-center tracking-tight "
            activeClassName="text-blue-500 font-semibold"
          >
            Partners
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className="hover:text-blue-500 font-normal hover:font-semibold text-lg cursor-pointer  text-left md:text-center tracking-tight "
            activeClassName="text-blue-500 font-semibold"
          >
            Game
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contactus"
            className="hover:text-blue-500 font-normal hover:font-semibold text-lg cursor-pointer  text-left md:text-center tracking-tight "
            activeClassName="text-blue-500 font-semibold"
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <div class="relative inline-block text-left">
            <div>
              <button
                type="button"
                class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-1 py-1 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={() => settoggleLang(!toggleLang)}
              >
                <Flags.US title="United States" className="w-10 h-5" />
                <svg
                  class="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {toggleLang && (
              <div
                class="origin-top-right absolute  mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div class="py-1 cursor-pointer" role="none">
                  <div className="flex items-center space-x-3">
                    <Flags.US title="United States" className="w-10 h-5" />
                    <h3>English</h3>
                  </div>
                </div>
                <div class="py-1 cursor-pointer" role="none">
                  <div className="flex items-center space-x-3">
                    <Flags.PL title="United States" className="w-10 h-5" />
                    <h3>English</h3>
                  </div>
                </div>
              </div>
            )}
          </div>
        </li>
      </ul>
    </>
  );

  return (
    <div className="flex flex-col ">
      <div className="flex items-center justify-between  mt-5 space-x-5 px-5  md:px-10 w-screen ">
        <div className="flex items-center  ">
          <img src="/logo.png" alt="brain-logo" className="" />
          <div className="flex flex-col justify-start align-top">
            <h1 className="font-normal text-4xl">BRAIN</h1>
            <p className="font-serif text-base text-left mt-2 ">
              BRinging STEM into Active agINg
            </p>
          </div>
        </div>
        <div className="flex-1 md:hidden">
          {toggleMenu ? (
            <FaMixer size={25} onClick={() => settoggleMenu(false)} />
          ) : (
            <FaBars size={25} onClick={() => settoggleMenu(true)} />
          )}
        </div>
        <div className="hidden md:block">
          <MenuList />
        </div>
      </div>
      {toggleMenu && <MenuList />}
    </div>
  );
}

export default Header;
