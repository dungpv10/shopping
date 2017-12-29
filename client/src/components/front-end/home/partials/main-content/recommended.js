import React, { Component } from "react";
import product2 from "../../../../../../res/images/home/product2.jpg";
import product3 from "../../../../../../res/images/home/product3.jpg";
import getRecommendedProductAction from "../../../../../actions/product/get_recommended_product";
import { connect } from "react-redux";
import lodash from "lodash";

class HomeRecommended extends Component {
    componentDidMount(){
        this.props.dispatch(getRecommendedProductAction());
    }
    render() {
        const { getRecommendedProduct } = this.props;
        const products = getRecommendedProduct.products ? lodash.chunk(getRecommendedProduct.products, 3) : [];
        return (
            <div className="recommended_items">
                <h2 className="title text-center">sản phẩm nổi bật</h2>

                <div id="recommended-item-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {products.map((productArr, index) => {
                            return (<div key={index} className={`item ${index === 0 ? "active" : ""}`}>
                                {productArr.map((product, idx) => {
                                    return (<div key={idx} className="col-sm-4">
                                        <div className="product-image-wrapper">
                                            <div className="single-products">
                                                <div className="productinfo text-center">
                                                    <img src={product.thumbnail_path} alt="" />
                                                    <h2>${product.price}</h2>
                                                    <p>{product.product_name}</p>
                                                    <a href="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Thêm vào giỏ hàng</a>
                                                </div>

                                            </div>
                                        </div>
                                    </div>);
                                })}
                            </div>);
                        })}

                    </div>
                    <a className="left recommended-item-control" href="#recommended-item-carousel" data-slide="prev">
                        <i className="fa fa-angle-left" />
                    </a>
                    <a className="right recommended-item-control" href="#recommended-item-carousel" data-slide="next">
                        <i className="fa fa-angle-right" />
                    </a>
                </div>
            </div>
            );
    }
}

export default connect(function(state) {
    const { getRecommendedProduct } = state;
    return { getRecommendedProduct };
})(HomeRecommended);
