import React, {Component} from "react";
import MasterLayout from "../layouts/master_layout";
import BreadCrumb from "../common/breadcrumb";

class Wishlist extends Component {
    render() {
        return (
            <MasterLayout>
                <section id="cart_items">
                    <div className="container">
                        <BreadCrumb activeLabel={"Sản phẩm đã lưu"}/>
                        <div className="table-responsive cart_info">
                            <table className="table table-condensed">
                                <thead>
                                <tr className="cart_menu">
                                    <td className="image">Sản phẩm</td>
                                    <td className="description"/>
                                    <td className="price">Giá</td>
                                    <td className="total">Thao tác</td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="cart_product">
                                        <a href=""><img src={require("../../../../res/images/cart/one.jpg")}
                                                        alt=""/></a>
                                    </td>
                                    <td className="cart_description">
                                        <h4><a href="">Colorblock Scuba</a></h4>
                                        <p>Web ID: 1089772</p>
                                    </td>
                                    <td className="cart_total">
                                        <p className="cart_total_price">$59</p>
                                    </td>
                                    <td className="cart_delete">
                                        <a className="cart_quantity_delete" href=""><i className="fa fa-times"/></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="cart_product">
                                        <a href=""><img src={require("../../../../res/images/cart/one.jpg")}
                                                        alt=""/></a>
                                    </td>
                                    <td className="cart_description">
                                        <h4><a href="">Colorblock Scuba</a></h4>
                                        <p>Web ID: 1089772</p>
                                    </td>
                                    <td className="cart_total">
                                        <p className="cart_total_price">$59</p>
                                    </td>

                                    <td className="cart_delete">
                                        <a className="cart_quantity_delete" href=""><i className="fa fa-times"/></a>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="cart_product">
                                        <a href=""><img src={require("../../../../res/images/cart/one.jpg")}
                                                        alt=""/></a>
                                    </td>
                                    <td className="cart_description">
                                        <h4><a href="">Colorblock Scuba</a></h4>
                                        <p>Web ID: 1089772</p>
                                    </td>

                                    <td className="cart_total">
                                        <p className="cart_total_price">$59</p>
                                    </td>
                                    <td className="cart_delete">
                                        <a className="cart_quantity_delete" href=""><i className="fa fa-times"/></a>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </MasterLayout>
        );
    }
}

export default Wishlist;
