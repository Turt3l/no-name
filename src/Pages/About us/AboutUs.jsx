import "../../style.css"
import background from "../../Media/background.png"
import logo from "../../Media/logoipsum.svg"
export default function AboutUsPage() {
    return (
        <div className="AboutContainer">
            <div className="background">
                <div className="filter"></div>
                <img id="contactsBackground" src={background} alt="contacts page background" />
                <div className="mainTextDiv">
                    <h1 className="mainText">About Us</h1>
                    <h2 className="secText">A short description of what we do</h2>
                </div>
            </div>
            <div className="aboutUsBottomDiv">                
                <div className="imageLeftSide">
                    (Bilde)
                </div>
                <div className="textRightSide">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                </div>
            </div>
        </div>
    )
}