import "../../style.css"
import background from "../../Media/background.png"

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

                </div>
                <div className="onlineForm">
                    <h2>Our online form</h2>
                    <form id="onlineForm" action="">
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
