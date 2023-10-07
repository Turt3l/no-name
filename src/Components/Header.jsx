import { Link } from "react-router-dom";
import instagram from "../Media/Icons Folder/instagram.svg";
import facebook from "../Media/Icons Folder/facebook.svg";
import twitter from "../Media/Icons Folder/twitter.svg";
import telephone from "../Media/telephone.svg"
import questionMark from "../Media/question-mark.svg"
import money from "../Media/money.svg"
import logo from "../Media/logo.png"
import { useState } from "react";
export default function Header() {
    const [burgerOpen, setBurgerOpen] = useState(false)
    const handleBurger = () => {
        setBurgerOpen((previous) => !previous)
    }
    return(
        <div className="Header">
            <div className={`HeaderContainer ${burgerOpen ? "open" : ""}`}>
                <div className="HeaderMainName">
                    <Link to="/" spy={true} smooth={true}><img src={logo}/></Link>
                </div>
                <div className={`headerLinksMobile ${burgerOpen ? "open": ""}`}>
                    <div className="burgerLogo" onClick={handleBurger}>
                        <svg width="45" height="45" viewBox="0 0 100 100">
                            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                            <path className="line line2" d="M 20,50 H 80" />
                            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                        </svg>
                    </div>
                    <div className={`burgerContent ${burgerOpen ? "open": ""}`}>
                        <div className="linkContainer mobile">
                            <div className="link"><img src={telephone}/><Link to="/contacts" spy={true} smooth={true} className="button headerButton">Contact Us<i className="arrowRight"/></Link></div>
                            <div className="link"><img src={money}/><Link to="/services" spy={true} smooth={true} className="button headerButton">Services<i className="arrowRight"/></Link></div>
                            <div className="link"><img src={questionMark}/><Link to="/aboutus" spy={true} smooth={true} className="button headerButton">About us<i className="arrowRight"/></Link></div>
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
                </div>
                <div className="headerLinks">
                    <div className="linkContainer">
                        <div className="link"><Link to="/contacts" spy={true} smooth={true} className="defaultLink">Contact Us</Link></div>
                        <div className="link"><Link to="/services" spy={true} smooth={true} className="defaultLink">Services</Link></div>
                        <div className="link"><Link to="/aboutus" spy={true} smooth={true} className="defaultLink">About us</Link></div>
                    </div>
                </div>
            </div>
        </div>
    )
}