// components/FarmerList.js
import React, { useState } from "react";

const FarmerList = ({ farmers }) => {
  const [search, setSearch] = useState("");
  const [selectedFarmer, setSelectedFarmer] = useState(null);

  const filteredFarmers = farmers.filter((farmer) =>
    farmer.name_en.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 bg-green-50">
      <h2 className="text-2xl font-bold text-green-700 mb-4">👨‍🌾 Farmer List</h2>

      <div className="mb-4 relative max-w-md">
        <input
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setSelectedFarmer(null);
          }}
          placeholder="Search Farmer by Name..."
          className="w-full border border-green-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        {search && filteredFarmers.length > 0 && !selectedFarmer && (
          <ul className="absolute z-10 bg-white border border-green-300 rounded mt-1 w-full shadow-md max-h-48 overflow-auto">
            {filteredFarmers.map((farmer) => (
              <li
                key={farmer.id}
                onClick={() => {
                  setSearch(farmer.name_en);
                  setSelectedFarmer(farmer);
                }}
                className="px-4 py-2 hover:bg-green-100 cursor-pointer"
              >
                {farmer.name_en}
              </li>
            ))}
          </ul>
        )}
      </div>

      <table className="w-full bg-white rounded-xl overflow-hidden shadow border border-green-200">
        <thead className="bg-green-100 text-green-800">
          <tr>
            <th className="py-2 px-4">ID</th>
            <th className="py-2 px-4">Name (EN)</th>
            <th className="py-2 px-4">Name (MR)</th>
            <th className="py-2 px-4">Village (EN)</th>
            <th className="py-2 px-4">Village (MR)</th>
            <th className="py-2 px-4">Mobile</th>
          </tr>
        </thead>
        <tbody>
          {(selectedFarmer ? [selectedFarmer] : farmers).map((farmer) => (
            <tr key={farmer.id} className="border-t hover:bg-green-50">
              <td className="py-2 px-4">{farmer.id}</td>
              <td className="py-2 px-4">{farmer.name_en}</td>
              <td className="py-2 px-4">{farmer.name_mr}</td>
              <td className="py-2 px-4">{farmer.village_en}</td>
              <td className="py-2 px-4">{farmer.village_mr}</td>
              <td className="py-2 px-4">{farmer.mobile}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FarmerList;
