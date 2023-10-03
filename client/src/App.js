import React from "react";
import { Routes, Route } from "react-router-dom";

// Importing components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Importing pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import ProfilePage from "./pages/ProfilePage";
import ReservationPage from "./pages/ReservationPage";
import ContactPage from "./pages/ContactPage";
import AdminDashboard from "./pages/AdminDashboard";
import ManagerDashboard from "./pages/ManagerDashboard";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div>
      {/* Navbar for Navigation */}
      <Navbar />

      {/* Routes to render pages based on URL */}
      <main>
       <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/menu" element={<MenuPage />} />
    <Route path="/cart" element={<CartPage />} />
    <Route path="/checkout" element={<CheckoutPage />} />
    <Route path="/profile" element={<ProfilePage />} />
    <Route path="/reservation" element={<ReservationPage />} />
    <Route path="/contact" element={<ContactPage />} />
    <Route path="/admin" element={<AdminDashboard />} />
    <Route path="/manager" element={<ManagerDashboard />} />
    <Route path="/login" element={<LoginPage />} />
    <Route path="/signup" element={<SignupPage />} />
    <Route path="*" element={<NotFoundPage />} />  {/* Default fall-back for non-matching routes */}
</Routes>
      </main>
      <br/>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
