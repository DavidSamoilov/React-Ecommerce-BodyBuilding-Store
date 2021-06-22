
const api = (() => {
    const getCategories = async ()=>{
        // This select will get me an array of objects{ categories names, and ids}       

        let categoriesArray= Promise.resolve([{id:1,category:"Protein"},{id:2,category:"Shirts"},{id:3,category:"Pants"}])

        return categoriesArray
    }
    getCategories().then(result => console.log(result))

    const getUserCartItems = async (userID)=> {
        // This select will take the userID and find all items in cart table that have the same id 
        // then it Will return an array of objects with {product_id:***, quantity:*}

        // UI will have will have a func to display cart items
        let userCartItemsAndQuantity= Promise.resolve([{product_id:1,quantity:2},{product_id:2,quantity:1},{product_id:3,quantity:1}])
        return userCartItemsAndQuantity

    }
    getUserCartItems().then(result => console.log(result))


    return {
        getCategories,
        getUserCartItems
    }
})()

