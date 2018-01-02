import React, { Component } from 'react';
import BootstrapModal from "../common/modal";

class Product extends Component {
    constructor(props){
        super(props);
        this.handleAddProductToCart = this.handleAddProductToCart.bind(this);
    }
    handleAddProductToCart(e) {
        e.preventDefault();
    }
    render() {
        const { product } = this.props;
        return (
            <div className="col-sm-4">
                <BootstrapModal ref={"modal"} />
                <div className="product-image-wrapper">
                    <div className="single-products">
                        <div className="productinfo text-center">
                            <img src={product.thumbnail_path} alt="" />
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
                                <a onClick={this.handleAddProductToCart} className="btn btn-default add-to-cart">
                                    <i className="fa fa-shopping-cart" />Thêm vào giỏ hàng
                                </a>
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
