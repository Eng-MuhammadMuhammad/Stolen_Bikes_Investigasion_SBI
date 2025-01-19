import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom"; // Use NavLink instead of Link
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className={`bg-black text-white p-4 ${styles.header}`}>
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12 mr-4" />
          <div className="flex items-center">
            <div className={`border-l-2 h-full ${styles.verticalLine}`}></div>
            <div className={`pl-4 text-4xl font-bold ${styles.sbi}`}>
              <span className={styles.letter}>S</span>
              <span className={styles.letter}>B</span>
              <span className={styles.letter}>I</span>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center justify-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 border-b-2 border-yellow-500 transition-colors"
                : "hover:text-yellow-500 transition-colors"
            }
          >
            Search Bikes
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 border-b-2 border-yellow-500 transition-colors"
                : "hover:text-yellow-500 transition-colors"
            }
          >
            Blog
          </NavLink>
          <NavLink
            to="/donate"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 border-b-2 border-yellow-500 transition-colors"
                : "hover:text-yellow-500 transition-colors"
            }
          >
            Donate
          </NavLink>
          <NavLink
            to="/stolen-bike"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 border-b-2 border-yellow-500 transition-colors"
                : "hover:text-yellow-500 transition-colors"
            }
          >
            Stolen Bike?
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-yellow-500 border-b-2 border-yellow-500 transition-colors"
                : "hover:text-yellow-500 transition-colors"
            }
          >
            Log In
          </NavLink>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive
                ? "text-black bg-yellow-500 border-2 border-yellow-500 px-4 py-2 rounded-md transition-colors"
                : "text-white border-2 border-white px-4 py-2 rounded-md transition-colors hover:text-black hover:bg-yellow-500 hover:border-yellow-500"
            }
          >
            Sign Up
          </NavLink>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden mt-4">
        <button className="w-full text-center bg-yellow-500 py-2 rounded-md text-black">
          Menu
        </button>
      </div>
    </header>
  );
};

export default Header;
