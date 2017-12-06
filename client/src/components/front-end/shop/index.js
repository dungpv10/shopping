import React, { Component } from 'react';
import MasterLayout from "../layouts/master_layout";
import imgAd from "../../../../res/images/shop/advertisement.jpg";
import Product from "../common/product";
import Categories from "../common/categories";

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
                            <Categories />

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
                                    <ul className="pagination">
                                        <li className="active"><a href="">1</a></li>
                                        <li><a href="">2</a></li>
                                        <li><a href="">3</a></li>
                                        <li><a href="">&raquo;</a></li>
                                    </ul>
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
