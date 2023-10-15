import Header from "./Components/Header";
import ContactsPage from "./Pages/Contacts/Contacts";
import LandingPage from "./Pages/Landing/Landing";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./Pages/Services/Services";
import AboutUsPage from "./Pages/About us/AboutUs";
import Footer from "./Components/Footer";
import PrivacyPage from "./Pages/Privacy/Privacy";
import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./Pages/CheckoutForm/CheckoutForm";

const stripePromise = loadStripe("pk_test_51O1PxaJIFOQgEMQO0IicrZDsYNs1Py5uL3eSU3k8I9ZctGWm8qE4gwr2K1OOHx4GEBoIDKHZKUGW3qGtdVkalTjg002WLSfUiQ");

function App() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',

    variables: {
      colorPrimary: '#0570de',
      colorBackground: 'black',
      colorText: 'white',
      colorDanger: '#df1b41',
      fontFamily: 'Ideal Sans, system-ui, sans-serif',
      spacingUnit: '5px',
      borderRadius: '20px',
    }
  };
  const options = {
    clientSecret,
    appearance,
  };

  const paymentElement = (options, stripePromise) => {
    return (
      options.clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )
    )
  }

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
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
