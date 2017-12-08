import React, { Component } from 'react';
import product3 from "../../../../res/images/home/product3.jpg";
import LazyLoadImg from "react-lazyload";

class Product extends Component {
    render() {
        return (
            <div className="col-sm-4">
                <div className="product-image-wrapper">
                    <div className="single-products">
                        <div className="productinfo text-center">
                            <LazyLoadImg>
                                <img src={product3} alt="" />
                            </LazyLoadImg>
                            <h2>$56</h2>
                            <p>Easy Polo Black Edition</p>
                            <a href="" className="btn btn-default add-to-cart">
                                <i className="fa fa-shopping-cart" />Add to cart
                            </a>
                        </div>
                        <div className="product-overlay">
                            <div className="overlay-content">
                                <h2>$56</h2>
                                <p>Easy Polo Black Edition</p>
                                <a href="" className="btn btn-default add-to-cart">
                                    <i className="fa fa-shopping-cart" />Add to cart
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="choose">
                        <ul className="nav nav-pills nav-justified">
                            <li><a href=""><i className="fa fa-plus-square"></i>Add to wishlist</a></li>
                            <li><a href=""><i className="fa fa-plus-square"></i>Add to compare</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
