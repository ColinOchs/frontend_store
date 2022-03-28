import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useState } from 'react';

const Product = (props) => {

    const [quantity, setQuantity] = useState(1);

    const onQuantityChange = (value) => {
        console.log("quantity changed to:", value);
        setQuantity(value);
    };

    const getTotal = () => {
        let total = quantity * props.data.price;
        return "$" + total.toFixed(2);
    }

    
    return (<div className="product">
        <img src={"/images/"+props.data.image} alt="product img"></img>
        <h2>{props.data.title}</h2>
        <h5>({props.data.category})</h5> 
        <h4>Qty in Stock:{props.data.stock}</h4>
        <label className="price">${props.data.price}</label>
        <label className="discount">current discounts ({props.data.discount}%)</label>
        <label className="total">Total: {getTotal()} = </label>
        <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
        <button className="btn btn-primary btn-sm">Add to Cart</button>
    </div>);
};

export default Product;

