import { Link } from 'react-router-dom';
import React from 'react';


const Button = ({id, manu}) =>{
    return <Link to={`/${manu}/${id}`}> <button className="btn draw-border" >More Details</button></Link>
}

export default Button;

