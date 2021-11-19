const cart = {
    items :[],
    addToCart: (id, qty) => {
        let foundIndex = cart.items.findIndex(itm => itm.id === id)
        if(foundIndex === -1){
            cart.items.push({id:id, qty:qty})
        } else {
            cart.items[foundIndex].qty += qty
        }
        // console.log(cart.items)
    },
    removeFromCart: id => {
        let foundIndex = cart.items.findIndex(itm => itm.id === id)
        delete cart.items[foundIndex]
    },
    updateQuantity: (id, qty) => {
        let foundIndex = cart.items.findIndex(itm => itm.id === id)
        cart.items[foundIndex].qty = qty
    },
}

export default cart