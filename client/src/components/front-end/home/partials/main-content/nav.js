import React, { Component } from "react";
import product3 from "../../../../../../res/images/home/product3.jpg";
import Navigation from "./nav/navigation";
import { connect } from "react-redux";
import getProductsNavigationAction from "../../../../../actions/product/get_navigation_product";

class HomeNav extends Component {
    componentDidMount() {
        this.props.dispatch(getProductsNavigationAction(1));
    }
    render() {
        return (<div className="category-tab">
            <div className="col-sm-12">
                <ul className="nav nav-tabs">
                    <Navigation category_id={1} title={"Thực phẩm"} hash={"t-shirt"} active />
                    <Navigation category_id={2} title={"Đồ trẻ em"} hash={"#blazers"} />
                    <Navigation category_id={3} title={"Thời trang"} hash={"#sunglass"} />
                </ul>
            </div>
            <div className="tab-content">
                <div className="tab-pane fade active in" >
                    {this.props.getNavigationProducts.products.map((product, index) => {
                        return (
                            <div key={index} className="col-sm-3">
                                <div className="product-image-wrapper">
                                    <div className="single-products">
                                        <div className="productinfo text-center">
                                            <img src={product.thumbnail_path} alt="" />
                                            <h2>${product.price}</h2>
                                            <p>{product.product_name}</p>
                                            <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"/>Add to cart</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>);
    }
}

export default connect(function(state) {
    const { getNavigationProducts } = state;
    return { getNavigationProducts };
})(HomeNav);
