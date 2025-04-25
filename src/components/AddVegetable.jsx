import React, { useState } from "react";
import ProductList from "../utils/ProductList";

const AddVegetable = () => {
  const [productList, setProductList] = useState(ProductList);

  const [englishName, setEnglishName] = useState("");
  const [marathiName, setMarathiName] = useState("");
  const [hinglishName, setHinglishName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!englishName || !marathiName || !hinglishName) {
      alert("Please fill all fields");
      return;
    }

    const newVegetable = {
      id: productList.length + 1,
      englishName,
      marathiName,
      hinglishName,
    };

    setProductList([...productList, newVegetable]);

    // Reset fields
    setEnglishName("");
    setMarathiName("");
    setHinglishName("");
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-700">
        Add New Vegetable to Product List
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            English Name
          </label>
          <input
            type="text"
            value={englishName}
            onChange={(e) => setEnglishName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="e.g. Cabbage"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Marathi Name
          </label>
          <input
            type="text"
            value={marathiName}
            onChange={(e) => setMarathiName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="e.g. कोबी"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Hinglish Name
          </label>
          <input
            type="text"
            value={hinglishName}
            onChange={(e) => setHinglishName(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="e.g. Kobi"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700 transition"
        >
          Add Vegetable
        </button>
      </form>

      {/* Display List */}
      <div className="mt-8">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Product List
        </h3>
        <ul className="list-disc pl-5 space-y-1">
          {productList.map((product) => (
            <li key={product.id} className="text-gray-700">
              {product.englishName} / {product.marathiName} /{" "}
              {product.hinglishName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddVegetable;
