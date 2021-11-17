import React from "react";
import "../styles/paymentDetailsStyle.css";

function PaymentDetails() {
    const paymentMethods = ["Credit Card/Debit Card", "NetBanking", "UPI", "Cash on Delivery"]
    return <div>
        <div className="payment-details-header">Payment Details</div>
        <div className="select-payment-text">Select a payment method</div>
        {paymentMethods.map(payMethod => {
            return <div key={payMethod} className="payment-entry">
                <input type="radio" name="payment" checked readOnly/>
                {payMethod}
            </div>
        })}
    </div>
}

export default PaymentDetails;