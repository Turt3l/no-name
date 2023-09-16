import React from "react";
import Accordion from "./Accordion";
import "../../style.css";
import background from "../../Media/background.png";
import phone from "../../Media/telephone.svg";
import email from "../../Media/envelope.svg";

export default function ContactsPage() {
    return (
        <div className="ContactsContainer">
            <div className="background">
                <div className="filter"></div>
                <img id="contactsBackground" src={background} alt="contacts page background" />
                <div className="mainTextDiv">
                    <h1 className="mainText">Got any questions? Contact us easily!</h1>
                    <h2 className="secText">You can easily contact us on the platforms listed below</h2>
                </div>
            </div>
            <div className="contactInformation">
                <div className="accordionDropdown">
                    <div className="accordionMain">
                        <h2>Frequently asked questions(FaQ)</h2>
                        <Accordion title="Section 1" content="Content for sectLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.ion 1"/>
                        <Accordion title="Section 2" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                        <Accordion title="Section 3" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                        <Accordion title="Section 4" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."/>
                        <div className="phoneEmail">
                            <div className="phoneDiv" id="contacts">
                                <img src={phone} alt="" />
                                <p>+371 22222222</p>
                            </div>
                            <div className="emailDiv" id="contacts">
                                <img src={email} alt="" />
                                <p>john@demostore.com</p>
                            </div>
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
