import React, { useEffect, useState, useRef } from "react";

const Form = () => {
  const [product, setItem] = useState("");
  const [price, setPrice] = useState("");
  const [bill, setBill] = useState([]);
  const billRef = useRef(); // Reference to bill section

  useEffect(() => {
    getData();
  }, []);

  const handleSubmit = (e, action) => {
    e.preventDefault();

    if (action === "add") {
      if ((product && price) === "")
        return alert("Enter the Product and the price");
      const newItem = { item: product, price: parseFloat(price) || 0 };
      const existingData = JSON.parse(localStorage.getItem("billData")) || [];

      existingData.push(newItem);
      localStorage.setItem("billData", JSON.stringify(existingData));

      setBill(existingData);
      setItem(""); // Clear input fields
      setPrice("");
    } else if (action === "remove") {
      confirm("Are you sure to Delete the all Products");
      localStorage.removeItem("billData");
      setBill([]);
    } else if (action === "print") {
      window.print(); // 🖨 Print the bill
    }
  };

  const getData = () => {
    const storedData = JSON.parse(localStorage.getItem("billData")) || [];
    setBill(storedData);
  };

  const totalPrice = bill.reduce(
    (sum, item) => sum + (parseFloat(item.price) || 0),
    0
  );

  return (
    <div className="flex justify-center shadow-2xl mt-10 ">
      <form className="p-4 m-10 border border-blue-400 rounded-md">
        <h1 className="text-center text-4xl my-10 text-green-500">
          Billing System For Shope
        </h1>
        <input
          type="text"
          placeholder="Enter Product Name"
          className="border m-2 p-2 border-gray-500 rounded-md text-md"
          value={product}
          onChange={(e) => setItem(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Price"
          className="border m-2 p-2 border-gray-500 rounded-md text-md"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <div className="flex justify-center mt-10">
          <button
            type="button"
            className="bg-green-600 px-12 py-2 text-white m-2 rounded-md cursor-pointer"
            onClick={(e) => handleSubmit(e, "add")}
          >
            Add
          </button>
          <button
            type="button"
            className="bg-red-600 px-12 py-2 text-white m-2 rounded-md cursor-pointer"
            onClick={(e) => handleSubmit(e, "remove")}
          >
            Remove
          </button>
          <button
            type="button"
            className="bg-blue-600 px-12 py-2 text-white m-2 rounded-md cursor-pointer"
            onClick={(e) => handleSubmit(e, "print")}
          >
            Print
          </button>
        </div>
      </form>

      {/* Bill Section */}
      <div ref={billRef}>
        <table className="m-10 p-4 border border-blue-500 shadow-lg rounded-lg">
          <thead className="bg-blue-200">
            <tr>
              <th className="px-4 py-2 border">Sr. No</th>
              <th className="px-4 py-2 border">Item Name</th>
              <th className="px-4 py-2 border">Price (₹)</th>
            </tr>
          </thead>
          <tbody>
            {bill.length > 0 ? (
              bill.map((m, index) => (
                <tr
                  key={index}
                  className="bg-gray-100 hover:bg-gray-200 transition"
                >
                  <td className="px-4 py-2 border text-center">{index + 1}</td>
                  <td className="px-4 py-2 border">{m.item}</td>
                  <td className="px-4 py-2 border text-center">₹{m.price}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center py-4">
                  No items added
                </td>
              </tr>
            )}
          </tbody>
          {bill.length > 0 && (
            <tfoot>
              <tr className="bg-gray-100 hover:bg-gray-200 transition">
                <td className="px-4 py-2 border text-center"></td>
                <td className="px-4 py-2 border font-semibold">Total</td>
                <td className="px-4 py-2 border text-center font-semibold">
                  ₹{totalPrice}
                </td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </div>
  );
};

export default Form;
