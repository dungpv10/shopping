import React, { Component } from 'react';
import MasterLayout from "../layouts/master_layout";
import imgAd from "../../../../res/images/shop/advertisement.jpg";
import Product from "../common/product";
import Sidebar from "../common/sidebar";
import Pagination from "../common/pagination";

class Shop extends Component {
    render() {
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
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
                                    <Product />
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

export default Shop;
