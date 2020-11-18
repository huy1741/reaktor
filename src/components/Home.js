import React from 'react';
import { FaTshirt, FaRedhat } from 'react-icons/fa';
import { GiMonclerJacket} from 'react-icons/gi';
import { Link } from 'react-router-dom'; 

const Home = () =>{
    return (
        <div className='container'>
        <div className='cardhome'><Link to='/shirt'> <h1>Shirt</h1></Link><FaTshirt size={30}/></div>
        <div className='cardhome'><Link to='/accessory'><h1>Accessory</h1></Link><FaRedhat size={30}/></div>
        <div className='cardhome'><Link to='/jacket'><h1>Jacket</h1></Link><GiMonclerJacket size={30}/></div>
        </div> 
    )
}

export default Home;