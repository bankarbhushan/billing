import React from "react";
import productList from "../utils/ProductList.js";
import { Link } from "react-router-dom";

const VegetableList = () => {
  return (
    <div>
      <div className="bg-green-700 fixed top-0 z-10 w-[100vw] text-white p-5 shadow-md text-center text-2xl font-bold tracking-wide">
        ── 🌿 भाजीपाला यादी 🌿 ───
      </div>

      <div className="max-w-4xl mx-auto mt-10 p-14 bg-white rounded-xl shadow-md">
        <Link to={"/"}>
          <button className="bg-orange-500 text-white cursor-pointer px-4 py-2 rounded-md">
            {" "}
            ⬅ Home
          </button>
        </Link>
        <h2 className="text-2xl font-bold text-center mb-6 text-green-700"></h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 rounded-md">
            <thead className="bg-green-100 text-gray-800 font-semibold text-[16px]">
              <tr>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">मराठी नाव</th>
                <th className="border px-4 py-2">Hinglish Name</th>
                <th className="border px-4 py-2">English Name</th>
              </tr>
            </thead>
            <tbody>
              {productList.map((product, index) => (
                <tr
                  key={index}
                  className={`text-center ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  } hover:bg-green-50 transition-all`}
                >
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2 font-medium text-gray-700">
                    {product.marathiName}
                  </td>
                  <td className="border px-4 py-2 text-gray-600">
                    {product.hinglishName}
                  </td>
                  <td className="border px-4 py-2 text-gray-600">
                    {product.englishName}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default VegetableList;
