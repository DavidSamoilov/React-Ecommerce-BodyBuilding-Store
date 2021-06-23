const usersDal = [
  { id: 1, email: "test@gmail.com", password: "123456",is_admin:true },
  { id: 2, email: "asdasdasdas@gmail.com", password: "zxcxzq123",is_admin:false },
  { id: 3, email: "David@gmail.com", password: "david1212" ,is_admin:false},
];

const api = (() => {
  const checkLoginDetails = (email, password) => {
    usersDal.forEach((user) => {
      if (user.email === email && user.password === password) {
        return user;
        // Or login user 
      }
    })
    return false
    
  };
  console.log(checkLoginDetails("test@gmail.com","123456"));

  const getCategories = async () => {
    // This select will get me an array of objects{ categories names, and ids}

    let categoriesArray = Promise.resolve([
      { id: 1, category: "Protein" },
      { id: 2, category: "Shirts" },
      { id: 3, category: "Pants" },
    ]);

    return categoriesArray;
  };
  getCategories().then((result) => console.log(result));

  const getProductDetailsForDisplay = () => {
    let productDetails = Promise.resolve([
      {
        name: "Protein Powder",
        small_desc: "Vanilla tasting protein bar 2.5 kg",
        big_desc: "lorem lorem lorem lorem lorem lorem lorem ",
        image: "png",
        categories: "Protein Food_Supplements",
      },
      {
        name: "Shirt",
        small_desc: "Workout Shirt",
        big_desc: "lorem lorem lorem lorem lorem lorem lorem ",
        image: "png",
        categories: "Shirts Clothing",
      },
    ]);

    // DataBase will fetch different items depending on what filters it will receive
    return productDetails;
  };
  getProductDetailsForDisplay().then((result) => console.log(result));

  const getUserCartProducts = async (userID) => {
    // This select will take the userID and find all items in cart table that have the same id
    // then it Will return an array of objects with {product_id:***, quantity:*}

    // UI will have will have a func to display cart items
    let userCartProductsAndQuantity = Promise.resolve([
      { product_id: 1, quantity: 2 },
      { product_id: 2, quantity: 1 },
      { product_id: 3, quantity: 1 },
    ]);
    return userCartProductsAndQuantity;
  };
  getUserCartProducts().then((result) => console.log(result));

  return {
    getCategories,
    getUserCartProducts,
  };
})();
