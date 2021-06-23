const api = (() => {

  // Users table
  const usersDal = [
    { id: 1, email: "test@gmail.com", password: "123456", is_admin: true },
    {
      id: 2,
      email: "asdasdasdas@gmail.com",
      password: "zxcxzq123",
      is_admin: false,
    },
    { id: 3, email: "David@gmail.com", password: "david1212", is_admin: false },
  ];

  // user Tries to login
  const checkLoginDetails = (email, password) => {
    return usersDal.find(
      (user) => user.email === email && user.password === password
    );
  };

  // returns user details if true else returns undefined


  // correct login test
  console.log(checkLoginDetails("test@gmail.com", "123456"));
  // incorrect user login
  console.log(checkLoginDetails("test@gmail.com", "654321"));


  
  const checkIfUserMailInDataBase = (email) =>
    !!usersDal.find((user) => user.email === email);


    // returns true/false if user mail in db
  console.log(checkIfUserMailInDataBase("David@gmail.com"));

  const addNewUser = async (email, password) => {
    //const res = await fetch('/add-user');
    //check res and respond to client
    if (checkIfUserMailInDataBase(email)) {
      return false;
    }
    const newId = usersDal.push({
      id: usersDal.length + 1,
      email,
      password,
      is_admin: 0,
    });
    return newId;
  };

  // successful 
  addNewUser("Etiel@gmail.com", "newuser123");
  // console.log("newUser", usersDal);

  const categoriesDal = [
    { id: 1, name: "Clothing" ,parent_category:undefined},
    { id: 2, name: "Shirts" ,parent_category:"Clothing"},
    { id: 3, name: "Pants" ,parent_category:"Clothing"},
  ];  

const checkIfCategoryNameExists = (name) => {
  return !!categoriesDal.find(category => category.name == name)
}
  const addNewCategory = (name,parent_category)=>{
    if(checkIfCategoryNameExists(name)){
        return false
    }
    categoriesDal.push({id:categoriesDal.length,name,parent_category})
    return true
      
  }
  addNewCategory("Pants")
  addNewCategory("Pants")
  addNewCategory("Shoes", "Clothing")
  addNewCategory("Gym_Equipment")
  console.log(categoriesDal);

  const productDetails =[
    {
      id:1,
      name: "Protein Powder",
      short_desc: "Vanilla tasting protein bar 2.5 kg",
      long_desc: "lorem lorem lorem lorem lorem lorem lorem ",
      price: 159,
    },
    {
      id:2,
      name: "Shirt",
      short_desc: "Workout Shirt",
      long_desc: "lorem lorem lorem lorem lorem lorem lorem ",
      image: 59,
    },
    {
      id:3,
      name: "Barbell",
      short_desc: "Workout Barbell",
      long_desc: "lorem lorem lorem lorem lorem lorem lorem ",
      image: 300,
    },
  ]



    // DataBase will fetch different items depending on what filters it will receive
  

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

export default api;
