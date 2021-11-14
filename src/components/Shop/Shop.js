
import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css";

const Shop = (props) => {
    const {products,pageCount,setPageNo} = useProducts(); // import from hooks/useProducts
    const [cart,setCart] = useCart(products); // import from hook/useCart.js
    const [page,setPage] = useState(0);

    const handleAddToCart = (product) => {
        const exists = cart.find(pd => pd.key === product.key);

        let newCart = [];
        if(exists){
            const rest = cart.filter(pd => pd.key !== product.key);
            exists.quantity += 1;
            newCart = [...rest, exists];   
        }else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        //setCart(cart+1); --> alternative 
        setCart(newCart);
        
        //Save to localstorage
        addToDb(product.key);
    }
 
    return (
        <div className="container">
            <div className="row row-cols-2">
              <div className="col-10 product-container hide-scrollbar">
                  <div className="single-product">
                      {products.map(product => <Product handleAddToCart={handleAddToCart} key={product.key} product={product}></Product>)}
                    <br /><br />
                    <div className="pagination-div d-flex justfy-content-center sticky-top">
                     <nav aria-label="Page navigation example ">
                        <ul className="pagination mx-auto">
                          <li className="page-item">
                            <a className="page-link" aria-label="Previous">
                              <span aria-hidden="true">&laquo;</span>
                            </a>
                          </li>
                          {
                            [...Array(pageCount).keys()]
                            .map(number => <li 
                            key={number} 
                            className="page-item"
                            onClick={ () => {
                              setPage(number);
                              setPageNo(number+1)
                            }}
                            ><a className={number === page ? "page-link selected": "page-link"}> {number+1}</a></li> )
                          }
                          <li className="page-item">
                            <a className="page-link" aria-label="Next">
                              <span aria-hidden="true">&raquo;</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                     
                  </div>
              </div>
              <div className="col-2 cart-container">
                <Cart cart={cart}>
                  <Link to="/order-review">
                    <p><button className="cart-btn">Review Order</button></p>
                  </Link>
                </Cart>
              </div>
            </div>
            
        </div>
    );
};

export default Shop;

