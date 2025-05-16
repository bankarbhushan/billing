import React, { useEffect, useState } from "react";
import ProductList from "../utils/ProductList";
import Footer from "./Footer";

const Home = () => {
  const [form, setForm] = useState({
    farmerName: "",
    date: "",
    day: "",
    vehicleCost: 10,
    advance: 0,
    otherFarmerCost: 0,
    phone: "",
  });
  const [editIndex, setEditIndex] = useState(null);
  const [userType, setUserType] = useState("farmer"); // Default to farmer
  const [products, setProducts] = useState([]);
  const [productInput, setProductInput] = useState({
    name: "",
    weight: "",
    rate: "",
  });
  const [error, setError] = useState("");

  const [suggestions, setSuggestions] = useState([]);

  // --------------------------------------------------- HANDLE FUNCTIONS ----------------------------------------------
  const handlePrint = () => {
    const printContent = document.getElementById("billSection").innerHTML;

    const win = window.open("", "_blank");

    // Copy all <link> and <style> tags
    const styles = Array.from(
      document.querySelectorAll('link[rel="stylesheet"], style')
    )
      .map((node) => node.outerHTML)
      .join("\n");

    win.document.write(
      <html>
        <head>
          <title>Print</title>${styles}
        </head>
        <body class="p-4  ">
          <div class="flex relative justify-between gap-5 items-center border-b-2 pb-5">
            <div class="p-4 border-2">${printContent}</div>
            <div class="flex flex-col h-">
              <div class="bg-black  p-1 ">-</div>
            </div>

            <div class="p-4 border-2">${printContent}</div>
          </div>
        </body>
      </html>
    );
    win.document.close();

    // Ensure print only after document is fully rendered
    win.onload = () => {
      setTimeout(() => {
        win.focus();
        win.print();
        win.close();
      }, 500); // Small delay to ensure rendering
    };
  };

  const handleProductNameChange = (e) => {
    const inputValue = e.target.value;
    setProductInput({ ...productInput, name: inputValue });

    // Find matching suggestions
    const filtered = ProductList.filter(
      (p) =>
        p.hinglishName.toLowerCase().includes(inputValue.toLowerCase()) ||
        p.id.toString() === inputValue
    );
    setSuggestions(filtered);
  };

  const handleSelectSuggestion = (product) => {
    setProductInput({
      ...productInput,
      name: product.marathiName || product.hinglishName,
    });
    setSuggestions([]); // Hide suggestions
  };

  const handleAddProduct = () => {
    if (!productInput.name || !productInput.weight || !productInput.rate) {
      setError("सर्व उत्पदानाची माहिती आवश्यक आहे.");
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

  const grandTotal = products.reduce((sum, p) => sum + p.total, 0); // total (already present)
  const rateKgSum = products.reduce((sum, p) => sum + p.rate * p.weight, 0); // New sum
  const totalCommision = products.reduce((sum, p) => sum + p.commission, 0);
  const totalDeduction =
    parseFloat(form.advance || 0) +
    parseFloat(form.otherFarmerCost || 0) +
    parseFloat(form.vehicleCost || 0);

  const netTotal = grandTotal - totalDeduction;

  return (
    <div className=" bg-gray-100 min-h-screen  relative">
      <div className="bg-green-700 fixed top-0 z-10 w-[100vw] text-white p-5 shadow-md text-center text-2xl font-bold tracking-wide">
        🌿 माऊली Bill System 🌿
      </div>

      <div className="p-6 mt-20">
        {/* Two section */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-xl shadow">
            <select
              id="userType"
              name="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
              className=" w-full m-auto my-5 p-2 flex justify-between text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
            >
              <option value="farmer">Farmer</option>
              <option value="vyapari">Vyapari</option>
            </select>
            <h2 className="text-xl font-bold mb-4">
              {" "}
              {userType === "farmer"
                ? "🧑‍🌾 शेतकरी माहिती"
                : "🧑‍🌾व्यापारी माहिती"}{" "}
            </h2>

            <input
              required
              type="text"
              placeholder={
                userType === "farmer" ? "🧑‍🌾शेतकरी नाव : " : "🧑‍🌾व्यापारी नाव : "
              }
              className="input border px-3 py-2 rounded-md m-2 "
              onChange={(e) => setForm({ ...form, farmerName: e.target.value })}
            />

            <input
              type="date"
              className="border px-3 py-2 rounded-md m-2"
              onChange={(e) => {
                const selectedDate = e.target.value;
                const dayName = new Date(selectedDate).toLocaleDateString(
                  "mr-IN",
                  {
                    weekday: "long",
                  }
                );

                setForm({
                  ...form,
                  date: selectedDate,
                  day: dayName,
                });
              }}
            />

            <input
              required
              type="text"
              placeholder="फोन नंबर"
              className="input border px-3 py-2 rounded-md m-2 "
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />
            <select
              className="border px-3 py-2 rounded-md m-2 font-semibold text-[15px]"
              onChange={(e) =>
                setForm({ ...form, vehicleCost: e.target.value })
              }
            >
              <option value="10">पट्टी - ₹10</option>
              <option value="0">पट्टी - ₹0</option>
              <option value="50">पट्टी - ₹50</option>
              <option value="100">पट्टी -₹100</option>
              <option value="150">पट्टी -₹150</option>
              <option value="200">पट्टी -₹200</option>
              <option value="300">पट्टी -₹300</option>
              <option value="500">पट्टी -₹500</option>
              <option value="700">पट्टी -₹700</option>
              <option value="800">पट्टी -₹800</option>
              <option value="1000">पट्टी -₹1000</option>
            </select>

            <input
              required
              type="number"
              placeholder="नगदी दिलेली रक्कम"
              className="input border px-3 py-2 rounded-md m-2 "
              onChange={(e) => setForm({ ...form, advance: e.target.value })}
            />
            <input
              required
              type="number"
              placeholder="इतर शेतकऱ्यांचे घेतलेला मालाचे एकूण पैसे"
              className="input border px-3 py-2 rounded-md m-2 "
              onChange={(e) =>
                setForm({ ...form, otherFarmerCost: e.target.value })
              }
            />
          </div>

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
              className="mt-3 bg-green-500 cursor-pointer text-white font-semibold px-4 py-2 rounded"
              onClick={handleAddProduct}
            >
              Add Product
            </button>
          </div>
        </div>

        {/* Bill section */}
        <div
          className="mt-6 w-full relative  border-2 bg-white p-4 rounded-xl shadow"
          id="billSection"
        >
          <div className="text-center mb-4">
            <h2 className="text-2xl font-bold">
              🌿 माऊली सब्जी भांडार, साकोली 🌿
            </h2>
            <hr className="my-2 border-t border-gray-400 w-1/2 mx-auto" />
          </div>

          <div className="grid grid-cols-2 gap-2 text-[16px] font-semibold mb-4 px-4">
            {/* शेतकरी माहिती */}
            <div>
              <p>
                <span className="inline-block w-28">
                  {userType === "farmer" ? "🧑‍🌾शेतकरी नाव:" : "🧑‍🌾व्यापारी नाव:"}
                </span>{" "}
                {form.farmerName}
              </p>
              <p>
                <span className="inline-block w-28">📞 फोन नंबर:</span>{" "}
                {form.phone}
              </p>
            </div>

            {/* दिनांक व वार */}
            <div className="text-right">
              <p>
                <span className="inline-block w-24">🗓️ दिनांक:</span>{" "}
                {form.date}
              </p>
              <p>
                <span className="inline-block w-24">📆 वार:</span> {form.day}
              </p>
            </div>
          </div>

          {/* मालक माहिती */}
          <div className="text-[16px] font-semibold px-4">
            <p>
              <span className="inline-block w-36">👨‍💼 मालक नाव:</span> योगेश
              गोटेफोडे
            </p>
            <p>
              <span className="inline-block w-36">📞 फोन नंबर:</span> ९९२१२६२७३२
            </p>
          </div>

          <h2 className="text-xl font-bold mt-4 mb-2">बिल</h2>

          <table className="w-fit text-left border">
            <thead>
              <tr className="bg-gray-200 border">
                <th className="p-2 border">क्र.</th>
                <th className="p-2 border">भाजी</th>
                <th className="p-2 border">वजन (kg)</th>
                <th className="p-2 border">दर (₹/kg)</th>
                <th className="p-2 border">(वजन * दर) </th>
                {userType === "farmer" ? (
                  <th className="p-2 border">कमिशन (8%)</th>
                ) : null}
                <th className="p-2 border">एकूण</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, index) => (
                <tr
                  key={index}
                  onClick={() => {
                    setProductInput({
                      name: p.name,
                      weight: p.weight,
                      rate: p.rate,
                    });
                    setEditIndex(index); // Set the index of the product being edited
                  }}
                  className="hover:bg-green-200 cursor-pointer"
                >
                  <td className="p-2 border">{index + 1}</td>
                  <td className="p-2 border">{p.name}</td>
                  <td className="p-2 border">{p.weight}</td>
                  <td className="p-2 border">{p.rate}</td>
                  <td className="p-2 border">{p.weight * p.rate}</td>
                  {userType === "farmer" ? (
                    <td className="p-2 border" id="commission">
                      ₹{p.commission.toFixed(0)}
                    </td>
                  ) : null}
                  <td className="p-2 border">₹{p.total.toFixed(0)}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-4 text-right font-bold text-lg space-y-1">
            <div>एकूण (वजन * दर) : ₹{rateKgSum.toFixed(0)}</div>
            <div>एकूण कमिशन (8%) : ₹{totalCommision.toFixed(0)}</div>
            <div>एकूण: ₹{grandTotal.toFixed(0)}</div>

            <div>
              पट्टी (-): ₹{parseFloat(form.vehicleCost || 0).toFixed(0)}
            </div>
            <div>
              नगदी दिलेली रक्कम (-): ₹{parseFloat(form.advance || 0).toFixed(0)}
            </div>
            <div>
              इतर शेतकऱ्यांचे घेतलेला मालाचे एकूण पैसे(-): ₹
              {parseFloat(form.otherFarmerCost || 0).toFixed(0)}
            </div>
            <div className="border-t font-extrabold text-2xl pt-2">
              💰 अंतिम रक्कम: ₹ {netTotal.toFixed(0)}
            </div>
          </div>
        </div>

        {/* Button section */}
        <div className="text-center  flex gap-4 items-center justify-end-safe mt-4">
          <a href="/vegetable-list" target="_blank" rel="noopener noreferrer">
            <button className="bg-purple-500 text-white px-6 py-2 cursor-pointer rounded shadow hover:bg-purp-600">
              भाजीपाला यादी
            </button>
          </a>

          <button
            onClick={handlePrint}
            className="bg-blue-500 text-white px-6 py-2 cursor-pointer rounded shadow hover:bg-blue-600"
          >
            प्रिंट करा
          </button>

          <button
            className="bg-green-600 text-white px-6 py-2 cursor-pointer rounded shadow hover:bg-green-700"
            onClick={() => {
              const number = form.phone?.replace(/[^0-9]/g, ""); // Clean the number
              if (!number) return alert("फोन नंबर दिलेला नाही");

              const message = encodeURIComponent(
                `🌿 *माऊली भाजी भांडार बिल* 🌿\n\n` +
                  `${
                    userType === "farmer"
                      ? `🧑‍🌾 *शेतकरी नाव:* ${form.farmerName}`
                      : `🧑‍🌾 *व्यापारी नाव:* ${form.farmerName}`
                  }\n` +
                  `📞 *फोन नंबर:* ${form.phone}\n` +
                  `📅 *दिनांक:* ${form.date} (${form.day})\n\n` +
                  `📦 *भाजी माहिती:*\n` +
                  products
                    .map(
                      (p, i) =>
                        `${i + 1}. ${p.name} - ${p.weight}kg x ₹${
                          p.rate
                        } = ₹${p.total.toFixed(0)}`
                    )
                    .join("\n") +
                  `\n\n` +
                  `*एकूण:* ₹${grandTotal.toFixed(0)}\n` +
                  `नगदी: ₹${parseFloat(form.advance || 0).toFixed(0)}\n` +
                  `पट्टी: ₹${parseFloat(form.vehicleCost || 0).toFixed(0)}\n` +
                  `इतर शेतकरी माल: ₹${parseFloat(
                    form.otherFarmerCost || 0
                  ).toFixed(0)}\n` +
                  `----------------------------\n` +
                  `*अंतिम रक्कम:* ₹${netTotal.toFixed(0)}`
              );

              const url = `https://wa.me/91${number}?text=${message}`;
              window.open(url, "_blank");
            }}
          >
            WhatsApp ने पाठवा
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
