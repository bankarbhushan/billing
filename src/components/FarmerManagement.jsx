import React, { useState } from "react";
import AddFarmer from "./AddFarmer";
import FarmerList from "./FarmerList";

const FamerManagment = () => {
  const [farmers, setFarmers] = useState([
    {
      id: "F001",
      name_en: "Ramesh Pawar",
      name_mr: "रामेश पवार",
      village_en: "Nagpur",
      village_mr: "नागपूर",
      mobile: "9876543210",
    },
    {
      id: "F002",
      name_en: "Suresh Kale",
      name_mr: "सुरेश काळे",
      village_en: "Pune",
      village_mr: "पुणे",
      mobile: "9123456780",
    },
  ]);

  const handleAddFarmer = (newFarmer) => {
    setFarmers((prev) => [...prev, newFarmer]);
  };

  return (
    <div>
      <AddFarmer onAddFarmer={handleAddFarmer} />
      <FarmerList farmers={farmers} />
    </div>
  );
};

export default FamerManagment;
