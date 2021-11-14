import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from "react-rating";
import './Product.css';

const Product = (props) => {
    //console.log(props)
    const {name,img,seller, price,stock,star} = props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="product">
           <div className="product-img">
                <img src={img} alt="" srcset="" />
           </div>
           
           <div className="products-desc">
                <h5 className="product-name">{name}</h5>
                <p>
                    <small>by {seller}</small>
                </p>
                <p>${price}</p>
                <Rating readonly  emptySymbol="far fa-star" fullSymbol="fas fa-star icon-color" initialRating={star}/>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <p><button onClick={ () => props.handleAddToCart(props.product) } className="cart-btn">{cartIcon} Add to cart</button></p>
           </div>
        </div>
    );
};

export default Product;