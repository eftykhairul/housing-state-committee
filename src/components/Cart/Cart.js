import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import './Cart.css';
import Name from '../Name/Name';

const Cart = (props) => {
    // console.log(props)
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
            {
                cart.map(carts=><Name key={carts.id} carts={carts}></Name>)
            }
        </div>
    );
};

export default Cart;