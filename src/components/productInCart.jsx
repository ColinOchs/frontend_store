import "./productInCart.css";

const ProductInCart = (props) => {

    return (
        <div className="prod-cart">
          <img src={"/images/" + props.data.image} alt="product img"></img>
          <div className="info">
            <h5>{props.data.title}</h5>
            <label>({props.data.category})</label>
            </div>

            <label className="price">@{props.data.price.toFixed(2)}</label>
            <label className="quantity">x  ( {props.data.quantity} )</label>
            <label className="total">total:___</label>
            <button type="button" class="btn btn-sm btn-danger">Remove</button>
           
        </div>
    );

};

export default ProductInCart;