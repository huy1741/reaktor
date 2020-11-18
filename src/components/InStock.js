import React,{useState, useEffect} from 'react';
import {useParams} from 'react-router';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';

const InStock = () =>{
    const {manu, id}=useParams();
    const [detail, fetchDetail]=useState(null);
    useEffect(()=>{
        const fetchApi = async () =>{
            const response = await axios.get(`https://bad-api-assignment.reaktor.com/availability/${manu}`);
            fetchDetail(response.data.response)
          };
        fetchApi();
        
    },[id, manu]);
    let filteredList;
    if (detail!== null){
         filteredList = detail.find(e=>e.id=id)
    }

    return (
        <div>
            { detail !== null ?
            <div className="Features">
            <div className="cardextra">
            <h1
            dangerouslySetInnerHTML={{ __html: filteredList.DATAPAYLOAD }}
          /></div>
                <div >
                <Link to='/jacket'> <button className="btn draw-border" >Jacket</button></Link>
                <Link to='/shirt'> <button className="btn draw-border" >Shirt</button></Link>
                <Link to='/accessory'> <button className="btn draw-border" >Accessory</button></Link>
                <Link to='/'> <button className="btn draw-border" >Homepage</button></Link>
                </div>
            </div> : <CircularProgress/>}
        </div>);
    };


export default InStock;