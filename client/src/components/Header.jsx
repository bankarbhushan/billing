import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="bg-green-700 fixed top-0 z-10 w-[100vw] text-white p-5 shadow-md text-center text-2xl font-bold tracking-wide">
        🌿 माऊली Bill System 🌿
        <div>
          <Link to={"/productList"}>Add product</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
