import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "./item";
import getProductsFromCartAction from "../../../../actions/product/get_product_from_cart";

class ListItem extends Component {
    componentDidMount() {
        this.props.dispatch(getProductsFromCartAction());
    }
    render() {
        return (
            <table className="table table-condensed">
                <thead>
                <tr className="cart_menu">
                    <td className="image">Sản phẩm</td>
                    <td className="description" />
                    <td className="price">Giá/1 sản phẩm</td>
                    <td className="quantity">Số lượng</td>
                    <td className="total">Thành tiền</td>
                    <td />
                </tr>
                </thead>
                <tbody>
                {this.props.getProductsFromCart && this.props.getProductsFromCart.products.map((product, index) => {
                    return (<CartItem key={index} product={product} />);
                })}
                <tr>
                    <td colSpan="4">&nbsp;</td>
                    <td colSpan="2">
                        <table className="table table-condensed total-result">
                            <tbody><tr>
                                <td>Cart Sub Total</td>
                                <td>$59</td>
                            </tr>
                            <tr>
                                <td>Exo Tax</td>
                                <td>$2</td>
                            </tr>
                            <tr className="shipping-cost">
                                <td>Shipping Cost</td>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <td>Total</td>
                                <td><span>$61</span></td>
                            </tr>
                            </tbody></table>
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default connect(function(state){
    const { getProductsFromCart } = state;
    return { getProductsFromCart };
})(ListItem);
