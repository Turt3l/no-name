import React from 'react';
import "./Payment.css";
import background from "../../Media/background.png"
import "../../style.css"
import { Link } from 'react-router-dom';


export default function PaymentPage() {
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
                <form className='PaymentForm'>
                    <Link to="/paymentsuccesful" spy={true} smooth={true}>
                    <button id='CheckoutButton' type="submit">Checkout</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}