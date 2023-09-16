import { Link } from "react-router-dom";
import background from "../../Media/background.png";
export default function LandingPage() {
    return (
        <div className="LandingPageContainer">
            <div className="background landing">
                <div className="filter"/>
                <img src={background} className="backgroundImage" alt="landingPageBackgroundImage"/>
                <div className="mainTextDiv landing">
                    <h1 className="mainText">
                        Lorem ipsum dolor sit amet
                    </h1>
                    <h2 className="secText landing">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </h2>
                    <div className="button landingPageButtonContainer">
                        <Link to={"/services"} className="landingButton">What we offer <i className="arrowRight"/></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}