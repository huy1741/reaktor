import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ItemDetails from './ItemDetails';

const Accessory = () =>{

const [info, fetchData]=useState([]);
  
const fetchApi = async () =>{
  const response = await axios.get('https://bad-api-assignment.reaktor.com/products/accessories');
  fetchData(response.data)
};

useEffect(()=>{
  fetchApi();
  
},[]);

const accessories = info.map(item=> 
    <ItemDetails key={item.id} item={item.type} id={item.id} price={item.price} color={item.color[0]}  manu={item.manufacturer} name={item.name}/>
    )

return <React.Fragment >
    {accessories}
        </React.Fragment>
    }

export default Accessory;