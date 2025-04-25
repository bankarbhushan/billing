import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute"; // you'll create this
import "./App.css";
import Dashbord from "./components/Dashbord";
import FarmerList from "./components/FarmerList";
import VegetableList from "./components/VegetableList";
import AddVegetable from "./components/AddVegetable";
import AddVyapari from "./components/AddVyapari";
import VyapariList from "./components/VyapariList";
import FamerManagment from "./components/FarmerManagement";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            // <ProtectedRoute>
            <Home />
            // </ProtectedRoute>
          }
        />
        {/* <Route path="/" element={<Dashbord />} />
        <Route path="/add-vegetable" element={<AddVegetable />} />
        <Route path="/add-vyapari" element={<AddVyapari />} />
        <Route path="/farmer-list" element={<FarmerList />} />
        <Route path="/vyapari-list" element={<VyapariList />} />
        <Route path="/vegetable-list" element={<VegetableList />} />
        <Route path="/farmer-management" element={<FamerManagment />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
