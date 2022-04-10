import './catalog.css';
import Product from './product';
import DataService from '../services/dataService';
import {useEffect, useState} from 'react';

const Catalog = () => {

    let [products, setProducts] = useState([]);

    const loadCatalog = async () => {
        console.log("Data Retrieved");
        let service = new DataService();
        let data = await service.getCatalog();
        setProducts(data);
    };

    useEffect( () => {
     loadCatalog();
    }, [] );

    return (<div className="catalog">
        <div className='space'></div>
        <h2>Please check out our available product line, updated seasonally:<br></br>framed prints, calendars, and print collections...</h2>
        
        <h3>We have {products.length} available product designs!</h3>
        {
            products.map(
                (prod) => (<Product key={prod._id}
                     data={prod}/>)
                )
            }
    </div>);

};

export default Catalog;