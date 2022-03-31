<<<<<<< HEAD
import './cart.css';
import store from '../context/storeContext';
import { useContext } from 'react';
import DataService from './../services/dataService';
import ProductInCart from './productInCart';



const  Cart = () => {

    //get two or more elements from the store
   let {cart, addProdToCart} = useContext(store);

    return (    
        <div className='shoppingCart'>
           <h1>Shopping Cart</h1>
           <h5>Are you prepared to enter a financial contract for {cart.length} items in your cart</h5>

           <div className='products'>

            {cart.map(( prod) => ( 
            <ProductInCart key={prod._id} data={prod}></ProductInCart>
             ))}

           </div>
          
        </div>

    );
};

export default Cart;



=======
import './cart.css';


const  Cart = () => {
    return (
        
        <div className='shoppingCart'>
           <h1>Shopping Cart</h1>
           
           
        </div>

    )
}

export default Cart



>>>>>>> 323943c13d6993301b94ca4eb51962f7e7c9bd9e
