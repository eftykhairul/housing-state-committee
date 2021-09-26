import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Member from '../Member/Member';
import './Committee.css'

const Committee = () => {
    const [members,setMembers] = useState([]);
    const [cart,setCart]=useState([]);
    const[name,setName]=useState([]);

    useEffect(()=>{
        fetch('./tools.JSON')
        .then(res=>res.json())
        .then(data=>setMembers(data))
    },[])
    const handleAddToCart=(member)=>{
        // console.log(member.name);
        const newCart=[...cart, member];
        setCart(newCart)
        
        const newName=[...name,member.name];
        setName(newName)
        
        
    }
    
    return (
        <div className='committee-container'>
            <div className="members-container">
                
                {
                    members.map(member=> <Member 
                        key={member.id}
                        member={member}
                        handleAddToCart={handleAddToCart}
                        ></Member>)
                }

            </div>
            <div className='cart-container'>
                <Cart cart={cart} name={name}></Cart>
            </div>
        </div>
    );
};

export default Committee;