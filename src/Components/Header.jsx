import { Link } from "react-router-dom";
import instagram from "../Media/Icons Folder/instagram.svg";
import facebook from "../Media/Icons Folder/facebook.svg";
import twitter from "../Media/Icons Folder/twitter.svg"
export default function Header() {

    return(
        <div className="Header">
            <div className="HeaderContainer">
                <div className="HeaderMainName">
                    Lorem Ipsum
                </div>
                <div className="HeaderLinkContainer">
                    <div className="HeaderLinks">
                        <div className="LogoContainer">
                            <img src={instagram} alt="" id="socialLogo"/>
                        </div>
                        <div className="LogoContainer">
                            <img src={facebook} alt="" id="socialLogo"/>
                        </div>
                        <div className="LogoContainer">
                            <img src={twitter} alt="" id="socialLogo"/>
                        </div>    
                    </div>
                </div>
                <Link to={"/contacts"} className="ContactButton">
                    Contact Us
                </Link>
                <div className="languageSelector">
                    <p>lv</p>
                </div>
            </div>
        </div>
    )
}