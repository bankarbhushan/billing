import React, { useState } from "react";
import ProductList from "../utils/ProductList";

const ProductIpnutFrom = () => {
  const [userType, setUserType] = useState("farmer"); // Default to farmer
  const [editIndex, setEditIndex] = useState(null);

  const [productInput, setProductInput] = useState({
    name: "",
    weight: "",
    rate: "",
  });
  const [suggestions, setSuggestions] = useState([]);
  const [error, setError] = useState("");
  const [products, setProducts] = useState([]);

  const handleSelectSuggestion = (product) => {
    setProductInput({
      ...productInput,
      name: product.marathiName,
    });
    setSuggestions([]); // Hide suggestions
  };

  const handleProductNameChange = (e) => {
    const inputValue = e.target.value;
    setProductInput({ ...productInput, name: inputValue });

    // Find matching suggestions
    const filtered = ProductList.filter(
      (p) =>
        p.englishName.toLowerCase().includes(inputValue.toLowerCase()) ||
        p.id.toString() === inputValue
    );
    setSuggestions(filtered);
  };

  const handleAddProduct = () => {
    if (!productInput.name || !productInput.weight || !productInput.rate) {
      setError("सर्व उत्पाद माहिती आवश्यक आहे.");
      return;
    }

    setError(""); // Reset error message

    // Parse weight and rate
    const weight = parseFloat(productInput.weight);
    const rate = parseFloat(productInput.rate);

    if (isNaN(weight) || isNaN(rate)) {
      setError("कृपया वैध वजन आणि दर प्रविष्ट करा.");
      return;
    }

    // Calculate total and commission dynamically based on userType
    const total = weight * rate;
    let commission = 0;

    if (userType === "farmer") {
      commission = (total * 8) / 100; // 8% for farmers
    } else if (userType === "vyapari") {
      commission = 0; // No commission for Vyapari
    }

    const finalTotal = total - commission;

    if (editIndex !== null) {
      // Edit existing product logic
      const updatedProducts = products.map((product, index) =>
        index === editIndex
          ? {
              ...product,
              ...productInput,
              weight,
              rate,
              commission,
              total: finalTotal,
            }
          : product
      );
      setProducts(updatedProducts);
      setEditIndex(null); // Reset edit mode
    } else {
      // Add new product logic
      setProducts([
        ...products,
        { ...productInput, weight, rate, commission, total: finalTotal },
      ]);
    }

    setProductInput({ name: "", weight: "", rate: "" }); // Reset input fields
  };
  return (
    <div className="bg-white p-4 relative rounded-xl shadow">
      <h2 className="text-xl font-bold mb-4">भाजीपाला माहिती</h2>
      <input
        type="text"
        placeholder="Enter Product Name or ID"
        className="input border  px-3 py-2 rounded-md m-2"
        value={productInput.name}
        onChange={handleProductNameChange}
      />

      {/* Suggestions Dropdown */}
      {suggestions.length > 0 && (
        <ul className="absolute z-10 max-w-full bg-white border border-gray-200 mt-1 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {suggestions.map((s, index) => (
            <li
              key={index}
              className="px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-900 transition-colors cursor-pointer"
              onClick={() => handleSelectSuggestion(s)}
            >
              <span className="font-medium">{s.id}</span> —
              <span className="ml-1">{s.englishName}</span>
              <span className="text-gray-500"> ({s.marathiName})</span>
            </li>
          ))}
        </ul>
      )}

      <input
        type="number"
        placeholder="वजन (kg)"
        className="input border px-3 py-2 rounded-md m-2"
        value={productInput.weight}
        onChange={(e) =>
          setProductInput({ ...productInput, weight: e.target.value })
        }
      />
      <input
        type="number"
        placeholder="दर (₹/kg)"
        className="input border px-3 py-2 rounded-md m-2"
        value={productInput.rate}
        onChange={(e) =>
          setProductInput({ ...productInput, rate: e.target.value })
        }
      />

      {error && <p className="text-red-500 m-2">{error}</p>}

      <button
        className="mt-3 bg-green-500 cursor-pointer text-white px-4 py-2 rounded"
        onClick={handleAddProduct}
      >
        Add Product
      </button>
    </div>
  );
};

export default ProductIpnutFrom;
