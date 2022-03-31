<<<<<<< HEAD
import store from "./storeContext";
import { useState } from "react";

const GlobalState = (props) => {
    const [cart, setCart] = useState([]);
    const[loggedInUser, setLoggedInUser] = useState({});

    const addProdToCart = (prod) => {
        console.log("adding prod to state");
        let copy = [...cart];

        let found = false;

        for(let i=0; i < copy.length; i++) {
            let prodInCart = copy[i];
            if(prodInCart._id ===prod._id){
                //found a match
                prodInCart.quantity = prodInCart.quantity + prod.quantity;
                //prodInCart.quantity += prod.quantity; (same as above)
                found = true;
            }
        }

        if (!found) {
            copy.push(prod);
        }
        setCart(copy);
    };

    const removeProdFromCart = () => {
        console.log("removing prod from state");
    };

    return (
        <store.Provider
         value={{
            cart: cart,
            user: loggedInUser,
            addProdToCart: addProdToCart,
            removeProdFromCart: removeProdFromCart,
            }}
         >
            {props.children}
        </store.Provider>
    );
};

=======
import store from "./storeContext";
import { useState } from "react";

const GlobalState = (props) => {
    const [cart, setCart] = useState([]);
    const[loggedInUser, setLoggedInUser] = useState({});

    const addProdToCart = (prod) => {
        console.log("adding prod to state");

        let copy = [...cart];
        copy.push(prod);
        setCart(copy);
    };

    const removeProdFromCart = () => {
        console.log("removing prod from state");
    };

    return (
        <store.Provider
         value={{
            cart: cart,
            user: loggedInUser,
            addProdToCart: addProdToCart,
            removeProdFromCart: removeProdFromCart,
            }}
         >
            {props.children}
        </store.Provider>
    );
};

>>>>>>> 323943c13d6993301b94ca4eb51962f7e7c9bd9e
export default GlobalState;