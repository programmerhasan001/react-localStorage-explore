// use local storage as your db for now....
const addToDb = (id) => {
    const exists = getDb();
    let shopping_cart = {};
    if (!exists) {
        shopping_cart[id] = 1;
    }
    else {
        shopping_cart = JSON.parse(exists)
        if (shopping_cart[id]) {
            shopping_cart[id] = shopping_cart[id] + 1;
        }
        else {
            shopping_cart[id] = 1;
        }
    }
    updateDb(shopping_cart);
}

// get from db
const getDb = () => localStorage.getItem('shopping_cart');
// update db
const updateDb = (cart) => localStorage.setItem('shopping_cart', JSON.stringify(cart));

// remove from db
const removeDb = id => {
    const exists = getDb();
    if (!exists) {

    }
    else {
        const shopping_cart = JSON.parse(exists);
        delete shopping_cart[id];
        updateDb(shopping_cart);
    }
}
export { addToDb, removeDb as deleteDb };