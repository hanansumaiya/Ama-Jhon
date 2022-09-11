//////////////// ADD TO DB
const addToDB = (id) => {
  let shoppingCart = {};
  // shopping cart create
  const stored = localStorage.getItem("shopping-cart");
  if (stored) {
    shoppingCart = JSON.parse(stored);
  } else {
    shoppingCart = {};
  }
  // quantity check
  const quantity = shoppingCart[id];
  if (quantity) {
    shoppingCart[id] = quantity + 1;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};
///////////////////// GET STORED
const getStoredCart = () => {
  let shoppingCart = {};
  const stored = localStorage.getItem("shopping-cart");
  if (stored) {
    shoppingCart = JSON.parse(stored);
  }
  return shoppingCart;
};
////////////////////// REMOVE FROM DB
const removeFromDB = (id) => {
  const stored = localStorage.getItem("shopping-cart");
  if (stored) {
    const shoppingCart = JSON.parse(stored);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};
export { addToDB, getStoredCart, removeFromDB };
