import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './Member.css';


const Member = (props) => {
    // console.log(props.member);
    const{images,name, email,gender,role,salary}=props.member;
    const element = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div>
            <div className='background-color'>
                <img className="image" alt="" src={images}/>
                <h5>Name: {name}</h5>
                <h5>Email: {email}</h5>
                <h5>Gender: {gender}</h5>
                <h5>Role: {role}</h5>
                <h5>Salary $: {salary}</h5>
                <button onClick={()=> props.handleAddToCart(props.member)} className="purchage-button">{element} add to cart</button>
            </div>
            
        </div>
    );
};

export default Member;