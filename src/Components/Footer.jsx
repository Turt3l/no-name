import logo from "../Media/logo.png"
import instagram from "../Media/Icons Folder/instagram.svg";
import facebook from "../Media/Icons Folder/facebook.svg";
import twitter from "../Media/Icons Folder/twitter.svg";
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <div className="Footer">
            <div className="FooterContainer">
                <div className="FooterLogoAndSocial">
                    <div className="FooterLogoContainer">
                        <div className="FooterLogo">
                            <img src={logo}/>
                        </div>
                    </div>
                    <div className="FooterSocialContainer">
                        <div className="socialContainer">
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
                </div>
                <div className="FooterLinkContainer">
                    <div className="FooterLink">
                        <div className="FooterHeader">
                            <h2>
                                Links
                            </h2>
                        </div>
                        <div className="link"><Link to="/contacts" spy={true} smooth={true} className="defaultLink">Contact Us</Link></div>
                        <div className="link"><Link to="/services" spy={true} smooth={true} className="defaultLink">Services</Link></div>
                        <div className="link"><Link to="/aboutus" spy={true} smooth={true} className="defaultLink">About us</Link></div>
                    </div>
                </div>
                <div className="FooterLinkContainer">
                    <div className="privacyPolicyContainer">
                        <div className="FooterHeader">
                            <h2>
                                Privacy policy
                            </h2>
                        </div>
                        <div className="link"><Link to="/privacy" spy={true} smooth={true} className="defaultLink">Privacy policy</Link></div>
                    </div>
                </div>
            </div>
            <div className="nytrobyte">
                <div className="createdBy">
                    Created by <Link to="https://nytrobyte.com/" spy={true} smooth={true} className="nytroLink">NytroByte</Link>
                </div>
            </div>
        </div>
    )
}