export function AddToCartBtn(props) {
    return (
            <button
                type="submit"
                className="btn btn-outline-warning add-to-cart-btn"
                to="/Cart"
                onClick={props.handleClick} 
            >Add to cart</button>
    )
}