import React from 'react';

const ReviewItem = (props) => {
    const {handleRemove} = props;
    const {name, price, quantity,key} = props.product;
    return (
        <div className="mb-3">
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}} className="products-desc">
                <div style={{width: '70%'}}>
                    <h4 className="product-name">{name}</h4>
                </div>
                <div style={{textAlign: 'center'}}>
                    <p style={{marginBottom:"0px"}}>Price: ${price}</p>
                    <p style={{marginTop:"0px"}}><small>Quantity: {quantity}</small></p>
                </div>
                   
                
                <div>
                    <button onClick={() => handleRemove(key)} className="cart-btn">Remove</button>
                </div>
           </div>
        </div>
    );
};

export default ReviewItem;