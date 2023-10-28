import { Link } from "react-router-dom"
import "./ServiceItem.css"
export default function ServiceItems(props) {

    const onServiceItemClick = () => {
        fetch('/data/items', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ itemId: props.itemId, price: props.price })
          })

    };

    return (
        <div className="serviceItem">
            <div className="serviceItemPrice">
                {props.discount ? <div className="discount">Discount: {props.discount}%</div> : ""}
                <div className="price">{props.price}€</div>
            </div>
            <div className="serviceItemDescription">
                {props.description}
            </div>
            <div className="serviceItemButton">
                <div className="buyButton">
                    <Link to="/checkout" spy={true} smooth={true} onClick={onServiceItemClick}>Buy</Link>
                </div>
            </div>
        </div>
    )
}