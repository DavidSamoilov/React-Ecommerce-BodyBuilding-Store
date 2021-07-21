let allFeaturedArr =[1,2,3,4,5,6,7,8,9,10,12]
export const featured_products_ids = (() => {
    const randomIndexArr = []
    const len = allFeaturedArr.length
    while(randomIndexArr.length < 3){
        let curRandomIndex = Math.floor(Math.random()  * len) + 1
        if(!(randomIndexArr.includes(curRandomIndex))){
            randomIndexArr.push(curRandomIndex)
        }
    }
    return randomIndexArr
})()

export const links = [
    {
        id:1,
        text:"Products",
        url: "/products"
    },
    {
        id:2,
        text:"Checkout",
        url: "/checkout"
    },
    {
        id:3,
        text:"Our Vision",
        url: "/vision"
    },
    
]

export const homepage_categories = [
    {
        id:1,
        name:"Protein",
        image: "https://images-na.ssl-images-amazon.com/images/I/716uIeq4rfL._SL1500_.jpg"
    },
    {
        id:2,
        name:"T-Shirts",
        image: "https://ae01.alicdn.com/kf/H7e9c61a36b714494a96482dc0bc05e2a8/Black-Gym-t-shirt-Men-Fitness-Bodybuilding-Short-sleeve-t-shirts-Sport-Workout-Cotton-Skinny-Tee.jpg_Q90.jpg_.webp"
    },
    {
        id:3,
        name:"Shoes",
        image: "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/38277b478a79419abf6da998000ab640_9366/Runfalcon_Shoes_Black_F36218_01_standard.jpg"
    },
    {
        id:4,
        name:"Protein-Bars",
        image:"https://images.albertsons-media.com/is/image/ABS/960317920?$ecom-pdp-desktop$&defaultImage=Not_Available"
    }
]



export const products_url = "http://localhost:5000/products/";

