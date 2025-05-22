import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import "./App.css";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import TermsAndConditions from "./pages/TermsAndConditions";
import RefundCancellationPolicy from "./pages/RefundCancellationPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import ProductForm from "./components/Product/ProductForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
        <Route path="/privacypolicy" element={<PrivacyPolicy />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/productList" element={<ProductForm />}></Route>

        <Route
          path="/termsandconditions"
          element={<TermsAndConditions />}
        ></Route>
        <Route
          path="/refundcancellationpolicy"
          element={<RefundCancellationPolicy />}
        ></Route>

        <Route
          path="/home"
          element={
            // <ProtectedRoute>
            <Home />
            // </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
