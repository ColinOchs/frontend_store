<<<<<<< HEAD
import { createContext } from "react";

//describe the data / functions
// that will be shared between components
const store = createContext({
    cart: [],
    user: {},

    addProdToCart: () => {},
    removeProdFromCart: () => {}
});

=======
import { createContext } from "react";

//describe the data / functions
// that will be shared between components
const store = createContext({
    cart: [],
    user: {},

    addProdToCart: () => {},
    removeProdFromCart: () => {}
});

>>>>>>> 323943c13d6993301b94ca4eb51962f7e7c9bd9e
export default store;