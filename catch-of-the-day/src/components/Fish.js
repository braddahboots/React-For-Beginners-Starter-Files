import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
    render(){
        const { image, name, price, desc } = this.props.details;

        return(
            <li className="menu-fish ">
                <img src={image} alt={name}/>
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p className="desc">{desc}</p>
                <button>SHOOOOOTS!!!</button>
            </li>
        ) 
    }
}

export default Fish;