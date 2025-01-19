import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={`bg-[#1e293b] text-white py-8 ${styles.footer}`}>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-xl text-yellow-500 font-semibold mb-4">SBI</h3>
            <ul className="space-y-2">
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              <li>
                <a href="/">Help</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Where We Are</a>
              </li>
              <li>
                <a href="/">Stolen Bike Recoveries</a>
              </li>
              <li>
                <a href="/">Get your stolen bike back</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl text-yellow-500 font-semibold mb-4">
              SUPPORT US
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/">Donate</a>
              </li>
              <li>
                <a href="/">Store</a>
              </li>
              <li>
                <a href="/">Ambassadors</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl text-yellow-500 font-semibold mb-4">
              RESOURCES
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/">API documentation</a>
              </li>
              <li>
                <a href="/">Dev Resources</a>
              </li>
              <li>
                <a href="/">Design & Logos</a>
              </li>
              <li>
                <a href="/">Security</a>
              </li>
              <li>
                <a href="/">Bike Manufacturer List</a>
              </li>
              <li>
                <a href="/">Protect your bike</a>
              </li>
              <li>
                <a href="/">Stolen Bike Map</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl text-yellow-500 font-semibold mb-4">
              WHO WE SERVE
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/">Bike Shops</a>
              </li>
              <li>
                <a href="/">Schools and Universities</a>
              </li>
              <li>
                <a href="/">Cities</a>
              </li>
              <li>
                <a href="/">Law Enforcement</a>
              </li>
              <li>
                <a href="/">Community Groups</a>
              </li>
              <li>
                <a href="/">Press inquiries</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-black px-8 py-6">
        <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            {new Date().getFullYear()} © All rights reserved.
          </p>

          <div className="flex items-center mt-4 md:mt-0">
            <a href="/" className="text-sm text-gray-300 hover:text-white mr-6">
              Privacy Policy & Terms
            </a>
          </div>

          <div className="flex items-center mt-4 md:mt-0">
            <span className="mr-3 text-sm text-gray-300">Language</span>
            <select className="bg-[#1e293b] text-white border border-[#c2c5cf] p-2 rounded-md text-sm">
              <option>English</option>
              <option>Deutsch</option>
              <option>Arabic</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
