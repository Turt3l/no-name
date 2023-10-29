import React from 'react';
import "./Payment.css";
import background from "../../Media/background.png";
import "../../style.css"
import { Link } from 'react-router-dom';

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
                    <Link to="/" spy={true} smooth={true}><button id="homebutton">Return to home page</button></Link>
                </div>
            </div>
        </div>
    )
}