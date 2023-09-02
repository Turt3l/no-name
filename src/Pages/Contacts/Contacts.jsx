import React from "react";
import Accordion from "./Accordion";
import "../../style.css";
import background from "../../Media/background.svg";

export default function ContactsPage() {
    return (
        <div className="ContactsContainer">
            <div className="background">
                <img id="contactsBackground" src={background} alt="contacts page background" />
                <div className="mainTextDiv">
                    <h1 id="mainText">Got any questions? Contact us easily!</h1>
                    <h2 id="secText">You can easily contact us on the platforms listed below</h2>
                </div>
            </div>
            <div className="contactInformation">
                <div className="accordionDropdown">
                    <div className="accordion">
                        <h2>Frequently asked questions(FaQ)</h2>
                        <Accordion title="Section 1" content="Content for section 1"/>
                        <Accordion title="Section 1" content="Content for section 1"/>
                    </div>
                    <div className="phoneEmail">
                        <div className="phoneDiv">

                        </div>
                        <div className="emailDiv">

                        </div>
                    </div>
                </div>
                <div className="onlineForm">
                    <form id="onlineForm" action="">
                    <h2>Our online form</h2>
                        <input type="text" id="persInf" className="name" placeholder="name"/><br></br>
                        <input type="text" id="persInf" className="email" placeholder="email"/><br></br>
                        <textarea name="message" id="persInf" className="message" placeholder="your message" cols="30" rows="10"></textarea>
                        <button id="submitButton" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
