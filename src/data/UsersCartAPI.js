import {BASE_URL} from "../constants/URL";

const UsersCartAPI = {
    initialSetup : function() {
        sessionStorage.usersCartData = JSON.stringify({})
    },
    getCartDataForUser : function(userId) {
        let data = JSON.parse(sessionStorage.usersCartData)
        if(data[String(userId)] === undefined) {
            data[String(userId)] = []
            sessionStorage.usersCartData = JSON.stringify(data)
        }
        return data[String(userId)]
    },
    updateQuantity : function(userId, productId, quantity) {
        let data = JSON.parse(sessionStorage.usersCartData)
        let userProducts = data[String(userId)]
        for(let product of userProducts) {
            if(product["id"] === productId) {
                product["quantity"] = quantity
            }
        }
        sessionStorage.usersCartData = JSON.stringify(data)
    },
    removeProduct : function(userId, productId) {
        let data = JSON.parse(sessionStorage.usersCartData)
        let userProducts = data[String(userId)]
        userProducts = userProducts.filter(product => product["id"] !== productId)
        data[String(userId)] = userProducts
        sessionStorage.usersCartData = JSON.stringify(data)
    },
    calculateTotalAmount : function(userId) {
        let data = JSON.parse(sessionStorage.usersCartData)
        let userProducts = data[String(userId)]
        let sum = 0
        for(let product of userProducts) {
            sum = sum + product["price"]*product["quantity"]
        }
        return sum
    },
    setAddress : function(userId, address) {
        if(!sessionStorage.addresses) {
            sessionStorage.addresses = JSON.stringify({})
        }
        let data = JSON.parse(sessionStorage.addresses)
        data[String(userId)] = address
        sessionStorage.addresses = JSON.stringify(data)
    },
    getAddress : function(userId) {
        if(!sessionStorage.addresses) {
            return ""
        }
        let data = JSON.parse(sessionStorage.addresses)
        return data[String(userId)]
    },
    placeOrderForUser : function(userId) {
        let data = JSON.parse(sessionStorage.usersCartData)
        data[String(userId)] = []
        sessionStorage.usersCartData = JSON.stringify(data)
    },
    addToUserCart : async function(userId, productId, quantity) {
        let productData = {
            "id": productId,
            "quantity": quantity
        }
        await fetch(BASE_URL + `/products/${userId}`)
            .then(response => response.json())
            .then(json => {
                productData["stock"] = json["stock"]
                productData["description"] = json["description"]
                productData["price"] = json["price"]
            })
        let data = JSON.parse(sessionStorage.usersCartData)
        if(!data[String(userId)]) {
            data[String(userId)] = []
        }
        data[String(userId)].push(productData)
        sessionStorage.usersCartData = JSON.stringify(data)
    },
    updateProductDB : function(productId, quantity) {
        let data = {
            "id": String(productId),
            "quantity": quantity
        }
        fetch(BASE_URL + "/products/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
    }
}

export default UsersCartAPI;