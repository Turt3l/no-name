import { Link } from "react-router-dom";
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
                            
                        </div>
                        <div className="LogoContainer">
                            
                        </div>
                        <div className="LogoContainer">
                            
                        </div>    
                    </div>
                </div>
                <Link to={"/contacts"} className="ContactButton">
                    Contact Us
                </Link>
            </div>
        </div>
    )
}