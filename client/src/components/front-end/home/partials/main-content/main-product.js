import React, { Component } from "react";
import Product from "../../../common/product";
import { connect } from "react-redux";
import getProductsForHomePageAction from "../../../../../actions/product/get_for_home_page";

class HomeMainProduct extends Component {
    componentDidMount() {
        this.props.dispatch(getProductsForHomePageAction());
    }
    render() {
        return (<div className="features_items">
            <h2 className="title text-center">Sản phẩm chính</h2>
            {this.props.getProductsForHomePage.products && this.props.getProductsForHomePage.products.map((product, index) => {
                return (<Product key={index} product={product} />);
            })}
        </div>);
    }
}

export default connect(function(state) {
    const { getProductsForHomePage } = state;
    return { getProductsForHomePage };
})(HomeMainProduct);
