import React, { Component } from 'react';
import LazyLoadImg from "react-lazyload";
import { Link } from "react-router-dom";

class Product extends Component {
    render() {
        const { product } = this.props;
        return (
            <div className="col-sm-4">
                <div className="product-image-wrapper">
                    <div className="single-products">
                        <div className="productinfo text-center">
                            <LazyLoadImg>
                                <img src={product.thumbnail_path} alt="" />
                            </LazyLoadImg>
                            <h2>${product.price}</h2>
                            <p>{product.product_name}</p>
                            <a href="" className="btn btn-default add-to-cart">
                                <i className="fa fa-shopping-cart" />Thêm vào giỏ hàng
                            </a>
                        </div>
                        <div className="product-overlay">
                            <div className="overlay-content">
                                <h2>${product.price}</h2>
                                <p>{product.product_name}</p>
                                <Link to="/them-gio-hang" className="btn btn-default add-to-cart">
                                    <i className="fa fa-shopping-cart" />Thêm vào giỏ hàng
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="choose">
                        <ul className="nav nav-pills nav-justified">
                            <li><a href=""><i className="fa fa-plus-square" />Lưu sản phẩm</a></li>
                            <li><a href=""><i className="fa fa-plus-square" />So sánh</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;
