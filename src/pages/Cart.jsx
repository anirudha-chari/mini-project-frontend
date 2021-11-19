//replace this with actual implementation!!!!!!!!!!!!!!!!!!!!!
import { useEffect, useState } from "react"
import { BASE_URL } from "../constants/URL"
import cart from "../data/cartContents"
import { ProductCard } from "../components/UI/Card"
import axios from "axios"

export const Cart = props => {
    const [product, setProduct] = useState(null)
    useEffect(() => {
            axios.get(BASE_URL + `/products/${cart.items[0].id}`)
                .then(json => setProduct(json))
                .then(console.log(cart.items))
                .catch(()=>console.log(cart.items[0].id))
    }, [])
    return (
        <div>
            {product && <ProductCard product={product} key={product.id} />}
        </div>
    )
}
