import React, { Component } from "react";
import Product from "../../../common/product";

class HomeMainProduct extends Component {
    render() {
        return (<div className="features_items">
            <h2 className="title text-center">Sản phẩm chính</h2>
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
        </div>);
    }
}

export default HomeMainProduct;
