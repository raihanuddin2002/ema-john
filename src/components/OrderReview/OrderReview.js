import React from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const OrderReview = () => {
    const {products} = useProducts();
    const [cart,setCart] = useCart(products);

    const handleRemove = (key) => {
        const newCart = cart.filter(product => product.key !== key); 
        setCart(newCart);
        removeFromDb(key);
    }
    const handlePlaceOrder = () => {
        clearTheCart();
    }

    return (
        <div className="container">
              <div className="row">
                <div className="col-10 product-container" style={{
                        height:'75vh',
                        overflowY:"scroll",
                        msOverflowStyle: "none",
                        scrollbarWidth: "none"
                    }}>
                    {
                        cart.map(product => <ReviewItem key={product.key} product={product} handleRemove={handleRemove}></ReviewItem>)
                    }
                </div>
                <div className="col-2 cart-container">
                    <Cart cart={cart}>
                            <Link to="/placeorder">
                                <p><button className="cart-btn" onClick ={handlePlaceOrder}>Place Order</button></p>
                            </Link>
                    </Cart>
                </div>
              </div>

        </div>
    );
};

export default OrderReview;