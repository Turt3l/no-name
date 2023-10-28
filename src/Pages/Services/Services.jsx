import background from "../../Media/background.png"
import ServiceItems from "../Services/ServiceItem"
export default function Services() {
    return(
        <div className="servicePageContainer">
            <div className="servicePageBackgroundContainer">
                <div className="servicePageBackground">
                    <div className="background contactUs">
                    <div className="filter"></div>
                    <img id="contactsBackground" src={background} alt="contacts page background" />
                    <div className="mainTextDiv">
                        <h1 className="mainText">Services</h1>
                        <h2 className="secText">Our services</h2>
                    </div>
                    </div>
                </div>
            </div>
                <div className="serviceItemListContainer">
                    <div className="serviceItemList"> 
                        <ServiceItems price={25} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"} itemId={1}/>
                        <ServiceItems price={50} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"} itemId={2}/>
                        <ServiceItems price={125} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"} itemId={3}/>
                    </div>
                </div>
            
        </div>
    )
}