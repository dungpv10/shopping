import React, { Component } from "react";
import addProductToCartAction from "../../../actions/product/add_product_to_cart";
import BootstrapModal from "../common/modal";
import _ from "lodash";
import { connect } from "react-redux";

class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            add_to_cart: false,
        };
        this.handleAddProductToCart = this.handleAddProductToCart.bind(this);
    }
    handleAddProductToCart(e) {
        e.preventDefault();
        this.props.dispatch(addProductToCartAction(parseInt(this.props.product.id)));

        const productInCart = JSON.parse(localStorage.getItem("products_cart") || JSON.stringify({}));
        const productArray = $.map(productInCart, function(id, index){
            return [id];
        });
        productArray.push(this.props.product.id);

        localStorage.setItem("products_cart", JSON.stringify(productArray));
        this.setState({
            add_to_cart: true,
        });
    }
    render() {
        const { product } = this.props;
        const textToCart = !this.state.add_to_cart ?
            (<span>Thêm vào giỏ hàng</span>) :
            (<span>Đã thêm vào giỏ hàng</span>);
        return (
            <div className="col-sm-4">
                <div className="product-image-wrapper">
                    <div className="single-products">
                        <div className="productinfo text-center">
                            <img src={product.thumbnail_path} alt="" />
                            <h2>${product.price}</h2>
                            <p>{product.product_name}</p>
                            <a href="" onClick={this.handleAddProductToCart} className="btn btn-default add-to-cart">
                                <i className="fa fa-shopping-cart" />{textToCart}
                            </a>
                        </div>
                        <div className="product-overlay">
                            <div className="overlay-content">
                                <h2>${product.price}</h2>
                                <p>{product.product_name}</p>
                                <a onClick={this.handleAddProductToCart} className="btn btn-default add-to-cart">
                                    <i className="fa fa-shopping-cart" />{textToCart}
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

export default connect(function(state) {
    const { addProductToCart } = state;
    return { addProductToCart };
})(Product);
