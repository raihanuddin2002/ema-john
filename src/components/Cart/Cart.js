import React, { useContext } from 'react';
import "./Cart.css";

const Cart = (props) => {
    let totalQuantity = 0;
    let total = 0;
    for(const product of props.cart){
        if(!product.quantity){
            product.quantity = 1;
        }
        total += product.price * product.quantity;
        totalQuantity += product.quantity;
    }

    const shipping = total > 0? 15: 0;
    const tax = (total + shipping) * 0.15;
    const grandTotal = total+shipping+tax;

    return (
        <div>
            <h4>Order Summary</h4>
            <h6 className="mt-3 fw-bold">Items Ordered: {parseInt(totalQuantity)}</h6>
            <h5>Total: {total.toFixed(2)}</h5>
            <p  className="mb-0"><small>Shipping: {shipping}</small></p>
            <p className="mt-0"><small>Tax: {tax.toFixed(2)}</small></p>
            <h5>Grand total: {grandTotal.toFixed(2)} </h5>
            {props.children}
        </div>
    );   
};

export default Cart;