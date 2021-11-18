import React, {createRef} from "react";
import "../../styles/addressDetailsStyle.css";
import UsersCartAPI from "../../data/UsersCartAPI";

function AddressDetails(props) {
    const textRef = createRef()
    return <div>
        <div className="address-details-header">Address Details</div>
        <div className="select-address-text">Please enter your address</div>
        <textarea className="address-entry" defaultValue={UsersCartAPI.getAddress(props.userId)} ref={textRef} onChange={() => {
            UsersCartAPI.setAddress(props.userId, textRef.current.value)
        }}/>
    </div>
}

export default AddressDetails;