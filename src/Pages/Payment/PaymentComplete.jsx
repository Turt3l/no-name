import React from 'react';
import "./Payment.css";
import background from "../../Media/background.png";
import "../../style.css"

export default function PaymentComplete() {
    return (
        <div className="PaymentComplete">
            <div className="background payment">
                <div className="filter"></div>
                <img id="contactsBackground" src={background} alt="contacts page background" />
            </div>
            <div className="PaymentCompletedContainer">
                <div className="PaymentCompleteText">
                    <h1>Payment made successfully</h1>
                    <h2>Returning to the main page...</h2>
                </div>
            </div>
        </div>
    )
}