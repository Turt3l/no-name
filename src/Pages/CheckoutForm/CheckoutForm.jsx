import React, { useEffect, useState } from "react";
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";
import background from "../../Media/background.png"

export default function CheckoutForm() {
    const stripe = useStripe();
    const elements = useElements();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        if (!stripe) {
          return;
        }
        const clientSecret = new URLSearchParams(window.location.search).get(
          "payment_intent_client_secret"
        );
        if (!clientSecret) {
          return;
        }
        stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
          switch (paymentIntent.status) {
            case "succeeded":
              setMessage("Payment succeeded!");
              break;
            case "processing":
              setMessage("Your payment is processing.");
              break;
            case "requires_payment_method":
              setMessage("Your payment was not successful, please try again.");
              break;
            default:
              setMessage("Something went wrong.");
              break;
          }
        });
      }, [stripe]);
      const handleSubmit = async (e) => {
        e.preventDefault();

        const {userInfoError} = await fetch('/data/userInfo', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ userEmail: email })
        })
        if (userInfoError) {
          setMessage(error.message);
        } else {
          setMessage("An unexpected error occurred.");
        }

        if (!stripe || !elements) {
          return;
        }
        const { error } = await stripe.confirmPayment({
          elements,
          confirmParams: {
            // Make sure to change this to your payment completion page
            return_url: "http://localhost:3000",
          },
        });
        if (error.type === "card_error" || error.type === "validation_error") {
          setMessage(error.message);
        } else {
          setMessage("An unexpected error occurred.");
        }
    
        setIsLoading(false);
      };
    
      const paymentElementOptions = {
        layout: {
            type: 'accordion',
            defaultCollapsed: false,
            radios: true,
            spacedAccordionItems: false
        }
      }

      return (
        <div className="paymentFormContainer">
                <div className="background landing">
                <div className="filter"/>
                <img src={background} className="backgroundImage" alt="landingPageBackgroundImage"/>
            <form id="payment-form" onSubmit={handleSubmit}>
            <LinkAuthenticationElement
            id="link-authentication-element"
            onChange={(e) => {
              setEmail(e.value.email);
            }}
          />
                <PaymentElement id="payment-element" options={paymentElementOptions} />
                <button disabled={isLoading || !stripe || !elements} id="submit">
                    <span id="button-text">
                    {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                    </span>
                </button>
                {/* Show any error or success messages */}
                {message && <div id="payment-message">{message}</div>}
            </form>
            </div>
        </div>
      );
}