import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';

const Cart = (props) => {
    // console.log(props.cart)
    const{cart}=props;
    
    let total=0;
    
    const element = <FontAwesomeIcon icon={faUserAlt} />
    for (const member of cart){
        total = total + member.salary;

    }
    
    return (
        <div className="cart">
            <h3>{element} Person Added:{props.cart.length} </h3>
        
            <h3>Total cost:${total} </h3>
            <h4 className="name-design">Name: {props.name} </h4>
        </div>
    );
};

export default Cart;