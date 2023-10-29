import { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
    "pk_test_51O1PxaJIFOQgEMQO0IicrZDsYNs1Py5uL3eSU3k8I9ZctGWm8qE4gwr2K1OOHx4GEBoIDKHZKUGW3qGtdVkalTjg002WLSfUiQ"
);

export default function Checkout() {
    const [clientSecret, setClientSecret] = useState("");
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      // Create PaymentIntent as soon as the page loads
      fetch("/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }, []);
  
    const appearance = {
      theme: "stripe",
  
      variables: {
        colorPrimary: "#0570de",
        colorBackground: "black",
        colorText: "white",
        colorDanger: "#df1b41",
        fontFamily: "Ideal Sans, system-ui, sans-serif",
        spacingUnit: "5px",
        borderRadius: "20px",
      },
    };
    const options = {
      clientSecret,
      appearance,
    };
  
    if (!loading) {
        <div>
          Loading...
        </div>
      }

      else {
        
        return  (
        <div className="Checkout">
          {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
        </div>
      );}
}