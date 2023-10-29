import Header from "./Components/Header";
import ContactsPage from "./Pages/Contacts/Contacts";
import LandingPage from "./Pages/Landing/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./Pages/Services/Services";
import AboutUsPage from "./Pages/About us/AboutUs";
import Footer from "./Components/Footer";
import PrivacyPage from "./Pages/Privacy/Privacy";
<<<<<<< HEAD
import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./Pages/CheckoutForm/CheckoutForm";
import PaymentPage from "./Pages/Payment/Payment";
import PaymentComplete from "./Pages/Payment/PaymentComplete";

const stripePromise = loadStripe("pk_test_51O1PxaJIFOQgEMQO0IicrZDsYNs1Py5uL3eSU3k8I9ZctGWm8qE4gwr2K1OOHx4GEBoIDKHZKUGW3qGtdVkalTjg002WLSfUiQ");
=======
import Checkout from "./Pages/Checkout/Checkout";
>>>>>>> 5d95944164147865dad4fa3295d7028ea405cb40

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/checkout" element={paymentElement(options, stripePromise, clientSecret)}/>
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/paymentcompleted" element={<PaymentComplete />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
