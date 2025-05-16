// Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import TermsAndConditions from "../pages/TermsAndConditions";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10 flex justify-between px-5">
      <div className="max-w-4xl   text-sm">
        &copy; {new Date().getFullYear()} Mauli Print Billing System. All rights
        reserved.
      </div>
      <div className="flex gap-5  ">
        <Link to={"/termsandconditions"}>Terms and Conditions</Link>
        <Link to={"/refundcancellationpolicy"}>Refund Cancellation Policy</Link>
        <Link to={"/privacypolicy"}>Privacy Policy</Link>
        <Link to={"/contactus"}>Contect Us</Link>
      </div>
    </footer>
  );
};

export default Footer;
