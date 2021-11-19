import { getAuth } from 'firebase/auth'
import UsersCartAPI from '../../data/UsersCartAPI'
import { useNavigate } from 'react-router'

export function AddToCartBtn({productId, quantity}) {
    let user = getAuth().currentUser
    const navigate = useNavigate()
    function handleClick(e){
        if(user !== null){
            const userId = user.email.split('@')[0]
            UsersCartAPI.addToUserCart(userId, productId, quantity)
        } else {
            navigate("/login")
        }
    }
    return (
            <button
                type="submit"
                className="btn btn-outline-warning add-to-cart-btn"
                to="/Cart"
                onClick={handleClick} 
            >Add to cart</button>
    )
}