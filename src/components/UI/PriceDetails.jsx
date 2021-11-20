import React from "react";
import "../../styles/priceDetailsStyle.css";
import UsersCartAPI from "../../data/UsersCartAPI"

function PriceDetails(props) {
    return <div>
        <div className="price-details-header">Price Details</div>
        <div className="price-details-body">
            <p className="price-details-text">
                <span className="left-aligned">Price({props.productsList.length} item)</span>
                <span className="right-aligned">
                    &#8377;{UsersCartAPI.calculateTotalAmount(props.userId)}
                </span>
            </p>
            <p className="price-details-text">
                <span className="left-aligned">Discount</span>
                <span className="right-aligned">
                    -&#8377;{10*props.productsList.length}
                </span>
            </p>
            <p className="price-details-text">
                <span className="left-aligned">Delivery Charges</span>
                <span className="right-aligned">FREE</span>
            </p>
        </div>
        <div className="price-details-footer">
            <span className="left-aligned">Total Amount</span>
            <span className="right-aligned">
                &#8377;{UsersCartAPI.calculateTotalAmount(props.userId) - 10*props.productsList.length}
            </span>
        </div>
    </div>
}

export default PriceDetails;