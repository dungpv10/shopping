import React, { Component } from 'react';
import MasterLayout from "../layouts/master_layout";
import imgAd from "../../../../res/images/shop/advertisement.jpg";
import Product from "../common/product";
import Sidebar from "../common/sidebar";
import Pagination from "../common/pagination";
import getProductsForHomePageAction from "../../../actions/product/get_for_home_page";
import { connect } from "react-redux";

class Shop extends Component {
    componentDidMount() {
        this.props.dispatch(getProductsForHomePageAction());
    }
    render() {
        const products = this.props.getProductsForHomePage;
        return (
            <MasterLayout>
                <section id="advertisement">
                    <div className="container">
                        <img src={imgAd} alt="" />
                    </div>
                </section>
                <section>
                    <div className="container">
                        <div className="row">
                            <Sidebar />

                            <div className="col-sm-9 padding-right">
                                <div className="features_items">
                                    <h2 className="title text-center">Features Items</h2>
                                    {products && products.products && products.products.map((product, index) => {
                                        return (<Product key={index} product={product} />);
                                    })}
                                    <Pagination />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </MasterLayout>
        );
    }
}

export default connect(function(state){
    const { getProductsForHomePage } = state;
    return { getProductsForHomePage };
})(Shop);
