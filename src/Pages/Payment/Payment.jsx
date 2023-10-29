import React from 'react';
import "./Payment.css";
import background from "../../Media/background.png"
import "../../style.css"
import { CardCvcElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

// const stripePromise = loadStripe('pk_test_51EAiktBEaidOzrZmREXHQxQAD1jHeOXWgXKRijDq2poLuErrHrVs3Mzs2W93F3WZPLzqXIX3xxcwhyjRRShxtBqa00ZpUCXL3h');

export default function PaymentPage() {
    // const options = {
    //     clientSecret: '{{CLIENT_SECRET}}',
    //   };
    return (
        <div className="PaymentPage">
            <div className="background payment">
                <div className="filter"></div>
                <img id="contactsBackground" src={background} alt="contacts page background" />
            </div>
            <div className="MainTextDiv">
                <h1>Checkout</h1>
            </div>
            <div className="PaymentFormContainer">
                <form className='PaymentForm' action="/create-checkout-session" method="POST">
                    <button id='CheckoutButton' type="submit">Checkout</button>
                </form>
                {/* <Elements stripe={stripePromise} options={options}>
                    <CheckoutForm />
                </Elements> */}
            </div>
        </div>
    )
}