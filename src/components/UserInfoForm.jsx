import React, { useState } from "react";

const UserInfoForm = () => {
  const [userType, setUserType] = useState("farmer"); // Default to farmer
  const [form, setForm] = useState({
    farmerName: "",
    date: "",
    day: "",
    vehicleCost: 10,
    advance: 0,
    otherFarmerCost: 0,
    phone: "",
  });

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <select
        id="userType"
        name="userType"
        value={userType}
        onChange={(e) => setUserType(e.target.value)}
        className="w-full m-auto my-5 p-2 flex justify-between text-base border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
      >
        <option value="farmer">Farmer</option>
        <option value="vyapari">Vyapari</option>
      </select>

      <h2 className="text-xl font-bold mb-4">
        {userType === "farmer" ? "🧑‍🌾 शेतकरी माहिती" : "🧑‍🌾 व्यापारी माहिती"}
      </h2>

      <input
        required
        type="text"
        placeholder={
          userType === "farmer" ? "🧑‍🌾 शेतकरी नाव : " : "🧑‍🌾 व्यापारी नाव : "
        }
        className="input border px-3 py-2 rounded-md m-2"
        onChange={(e) => setForm({ ...form, farmerName: e.target.value })}
      />

      <input
        type="date"
        className="border px-3 py-2 rounded-md m-2"
        onChange={(e) => {
          const selectedDate = e.target.value;
          const dayName = new Date(selectedDate).toLocaleDateString("mr-IN", {
            weekday: "long",
          });

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
        className="input border px-3 py-2 rounded-md m-2"
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
      />

      <select
        className="border px-3 py-2 rounded-md m-2 font-semibold text-[15px]"
        onChange={(e) => setForm({ ...form, vehicleCost: e.target.value })}
      >
        <option value="10">पट्टी - ₹10</option>
        <option value="20">पट्टी - ₹50</option>
        <option value="50">पट्टी - ₹100</option>
        <option value="100">पट्टी - ₹100</option>
        <option value="150">पट्टी - ₹150</option>
        <option value="200">पट्टी - ₹200</option>
        <option value="300">पट्टी - ₹300</option>
        <option value="500">पट्टी - ₹500</option>
        <option value="700">पट्टी - ₹700</option>
        <option value="800">पट्टी - ₹800</option>
        <option value="1000">पट्टी - ₹1000</option>
      </select>

      <input
        required
        type="number"
        placeholder="नगदी दिलेली रक्कम"
        className="input border px-3 py-2 rounded-md m-2"
        onChange={(e) => setForm({ ...form, advance: e.target.value })}
      />

      <input
        required
        type="number"
        placeholder="इतर शेतकऱ्यांचे मालाचे पैसे"
        className="input border px-3 py-2 rounded-md m-2"
        onChange={(e) => setForm({ ...form, otherFarmerCost: e.target.value })}
      />
    </div>
  );
};

export default UserInfoForm;
