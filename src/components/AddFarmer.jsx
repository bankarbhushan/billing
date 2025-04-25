// components/AddFarmer.js
import React, { useState } from "react";

const AddFarmer = ({ onAddFarmer }) => {
  const [name, setName] = useState("");
  const [village, setVillage] = useState("");
  const [mobile, setMobile] = useState("");

  const marathiMap = {
    Ramesh: "रामेश",
    Suresh: "सुरेश",
    Ganesh: "गणेश",
    Pawar: "पवार",
    Kale: "काळे",
    Shinde: "शिंदे",
    Nagpur: "नागपूर",
    Pune: "पुणे",
    Wani: "वणी",
  };

  const translateToMarathi = (text) =>
    text
      .split(" ")
      .map((word) => marathiMap[word] || word)
      .join(" ");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFarmer = {
      id: Date.now().toString(),
      name_en: name,
      name_mr: translateToMarathi(name),
      village_en: village,
      village_mr: translateToMarathi(village),
      mobile,
    };

    onAddFarmer(newFarmer);
    setName("");
    setVillage("");
    setMobile("");
  };

  return (
    <div className="p-6 bg-green-50">
      <h2 className="text-2xl font-bold text-green-700 mb-4">➕ Add Farmer</h2>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 max-w-md bg-white p-6 rounded-xl shadow"
      >
        <div>
          <label className="block text-green-700 font-medium">
            Name (English)
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-green-300 px-4 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-green-700 font-medium">
            Village (English)
          </label>
          <input
            type="text"
            value={village}
            onChange={(e) => setVillage(e.target.value)}
            className="w-full border border-green-300 px-4 py-2 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-green-700 font-medium">
            Mobile Number
          </label>
          <input
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="w-full border border-green-300 px-4 py-2 rounded"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Add Farmer
        </button>
      </form>
    </div>
  );
};

export default AddFarmer;
