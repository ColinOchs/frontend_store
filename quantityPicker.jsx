import "./quantityPicker.css";
import{useState} from 'react';

const QuantityPicker = (props) => {
    let [quantity, setQuantity] = useState(0);

    const handleDecrease= () => {
        let value = quantity;
        if(value>1)
            value = value-1;

        setQuantity(value);
        props.onChange(value);
    }
   const handleIncrease = () => {
        let value = quantity+1;   
       setQuantity(value); //it takes time to render..
       props.onChange(value);
   }

    return(<div className='quantityPicker'>
        <button className="btn btn-outline-light btn btn-secondary btn-sm" onClick = {handleDecrease}>-</button>
        <label>  {quantity}  </label>
        <button className="btn btn-outline-light btn btn-secondary btn-sm" onClick={handleIncrease}>+</button>
    </div>);
};

export default QuantityPicker;