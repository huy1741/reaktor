import React from 'react';
import '../App.css';
import Button from './Button';

const ItemDetails = ({id, price, manu, name, color}) =>{
    
    return <div className="card">         
            <h1 className="card__name">{name}</h1>
            <p className="card__name1">Price: {price}</p>
            <p className="card__name2">Manufacturer: {manu}</p>
            <p className="card__name2">Color: {color}</p>
            <Button id={id} manu={manu}/>
            </div>

};

export default ItemDetails;