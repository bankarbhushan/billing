import React, { useState } from "react";
import ProductIpnutFrom from "./ProductIpnutFrom";
import UserInfoForm from "./UserInfoForm";

const TwoFormSection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <UserInfoForm />
      <ProductIpnutFrom />
    </div>
  );
};

export default TwoFormSection;
