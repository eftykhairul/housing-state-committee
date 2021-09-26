import React from 'react';
import "./Name.css"

const Name = (props) => {
    // console.log(props.carts)
    return (
        <div>
            <h4 className="name-design">Selected Member: {props.carts.name}</h4>
        </div>
    );
};

export default Name;