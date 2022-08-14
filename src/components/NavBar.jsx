import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
export default function NavBar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <div className="bg-[#131128]">
      <nav className="relative flex items-center h-[60px] w-[90%] px-[0.5rem] py-[0rem] bg-[#131128] justify-start ml-auto mr-auto pt-10 mb-10">
        <Link
          to="/"
          className="ml-[1rem]"
          style={{
            fontWeight: "800",
            fontFamily: "sans-serif",
            fontSize: 20,
            color: "#6639e4",
          }}
        >
          Bitcoin<span style={{ color: "#FF792E" }}>.</span>
        </Link>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from Heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <Link style={{ fontSize: 14, paddingTop: 10 }} to="/">
                Doctors
              </Link>
            </li>
            <li>
              <Link style={{ fontSize: 14, paddingTop: 10 }} to="/">
                Hospitals
              </Link>
            </li>
            <li>
              <Link style={{ fontSize: 14, paddingTop: 10 }} to="/">
                About Us
              </Link>
            </li>
            <li>
              <Link style={{ fontSize: 14, paddingTop: 10 }} to="/">
                Log In
              </Link>
            </li>
            <li>
              <button className="rounded-full bg-[#6639e4] h-[60px] w-[50vw] sm:w-[180px] text-white font-semibold text-xl hover:bg-[#282454] hover:h-[50px] hover:w-[170px] ease-in duration-200">
                Read More
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
