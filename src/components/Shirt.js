import React, {useEffect, useState} from 'react';
import axios from 'axios';
import ItemDetails from './ItemDetails';
import CircularProgress from '@material-ui/core/CircularProgress';
const Shirt = () =>{

    const [info, fetchData]=useState([]);
      
    const fetchApi = async () =>{
      const response = await axios.get('https://bad-api-assignment.reaktor.com/products/shirts');
      fetchData(response.data)
    };
    
    useEffect(()=>{
      fetchApi();
      
    },[]);
    
    const shirts = info.map(item=> 
        <ItemDetails key={item.id} item={item.type} id={item.id} price={item.price} color={item.color[0]}  manu={item.manufacturer} name={item.name}/>
        )
    
    return <React.Fragment >
        {info.length !== 0 ? shirts : <CircularProgress style={{marginLeft: '30rem'}}/>}
    </React.Fragment>
        };
    
    export default Shirt;