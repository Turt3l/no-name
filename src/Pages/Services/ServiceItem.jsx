import "./ServiceItem.css"
export default function ServiceItems(props) {
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
                    Buy
                </div>
            </div>
        </div>
    )
}