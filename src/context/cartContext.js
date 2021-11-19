import { getAuth } from "@firebase/auth";
import React, { useContext, useState, useEffect } from "react";

const CartContext = React.createContext()

export function useCart() {
    return useContext(CartContext)
}

export function CartProvider({ children }) {
    const [cartContent, setCartContent] = useState({})
    const [id, setId] = useState()

    useEffect(() => {
        const user = getAuth().currentUser
        if (user) {
            setId(user.email.split('@')[0])
        }
    }, [])
    const value = {
        cartContent,
        setCartContent,
        id
    }
    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}