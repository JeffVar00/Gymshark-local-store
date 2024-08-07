"use client";

import { useState } from "react";
import PhoneIcon from "./PhoneIcon";
import SocialMedia from "./SocialMedia";

const Footer = () => {
  const [helpOpen, setHelpOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  const toggleHelp = () => setHelpOpen(!helpOpen);
  const toggleAccount = () => setAccountOpen(!accountOpen);
  const togglePages = () => setPagesOpen(!pagesOpen);

  return (
    <footer className="bg-websecundary text-webprimary mt-8">
      <div className="px-4 lg:px-16 lg:py-8 lg:border-t-2 border-b-2">
        <div className="flex flex-col lg:flex-row justify-start lg:gap-6 xl:gap-8">
          <div className="w-full lg:w-auto border-y-2 lg:border-0 lg:pr-4">
            <div
              className="flex justify-between items-center cursor-pointer lg:cursor-default py-4 lg:py-0"
              onClick={toggleHelp}
            >
              <h4 className="text-sm font-bold lg:mb-4">HELP</h4>
              <span className="text-xl font-bold lg:hidden">
                {helpOpen ? "-" : "+"}
              </span>
            </div>
            <ul
              className={`text-sm font-semibold text-gray-500 space-y-2 transition-all duration-500 ease-in-out ${
                helpOpen ? "max-h-screen mb-4 " : "max-h-0 overflow-hidden"
              } lg:max-h-screen`}
            >
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Delivery Information</a>
              </li>
              <li>
                <a href="#">Returns Policy</a>
              </li>
              <li>
                <a href="#">Make A Return</a>
              </li>
              <li>
                <a href="#">Orders</a>
              </li>
              <li>
                <a href="#">Submit a Fake</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-auto lg:border-0 lg:pr-4">
            <div
              className="flex justify-between items-center cursor-pointer lg:cursor-default py-4 lg:py-0"
              onClick={toggleAccount}
            >
              <h4 className="text-sm font-bold lg:mb-4">MY ACCOUNT</h4>
              <span className="text-xl font-bold lg:hidden">
                {accountOpen ? "-" : "+"}
              </span>
            </div>
            <ul
              className={`text-sm font-semibold text-gray-500 space-y-2 transition-all duration-500 ease-in-out ${
                accountOpen ? "max-h-screen mb-4 " : "max-h-0 overflow-hidden"
              } lg:max-h-screen`}
            >
              <li>
                <a href="#">Login</a>
              </li>
              <li>
                <a href="#">Register</a>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-auto border-y-2 lg:border-0 lg:pr-4">
            <div
              className="flex justify-between items-center cursor-pointer lg:cursor-default py-4 lg:py-0"
              onClick={togglePages}
            >
              <h4 className="text-sm font-bold lg:mb-4">PAGES</h4>
              <span className="text-xl font-bold lg:hidden">
                {pagesOpen ? "-" : "+"}
              </span>
            </div>
            <ul
              className={`text-sm font-semibold text-gray-500 space-y-2 transition-all duration-500 ease-in-out ${
                pagesOpen ? "max-h-screen mb-4 " : "max-h-0 overflow-hidden"
              } lg:max-h-screen`}
            >
              <li>
                <a href="#">Gymshark Central</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Student Discount</a>
              </li>
              <li>
                <a href="#">Factory List</a>
              </li>
            </ul>
          </div>
          <div className=""></div>
        </div>

        <div className="flex flex-col gap-5 md:gap-2 md:flex-row-reverse md:justify-between my-8 lg:my-0 mx-2">
          <div>
            <div className="flex flex-col md:flex-row-reverse md:gap-4 justify-center items-center">
              <SocialMedia />
              {/* <div className="flex text-sm text-websecundary font-bold mt-2 md:mt-0 lg:mt-0 items-center gap-2 cursor-pointer bg-webprimary py-1 px-2 rounded-md">
                <PhoneIcon classname="w-5 h-4 text-websecundary" />
                <span>8422-6359</span>
              </div> */}
            </div>
          </div>

          <div className="flex flex-col gap-2 lg:hidden items-center md:items-start  text-sm font-bold text-gray-500">
            <a href="#">Terms and Conditions</a>
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Notice</a>
            <a href="#">Cookie Policy</a>
            <a href="#">Modern Slavery</a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-start md:justify-between items-center py-4 px-6 text-center">
        <p className="text-xs  xl:text-sm  font-semibold text-gray-500 ">
          © 2024 Gymshark Limited | All Rights Reserved. | We Do Gym.
        </p>
        <div className="hidden lg:flex justify-center space-x-4 text-xs xl:text-sm font-semibold text-gray-500">
          <a href="#">Terms and Conditions</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Notice</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Modern Slavery</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
