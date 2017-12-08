import React, { Component } from "react";

class CartItem extends Component {
    render() {
        return (
            <tr>
                <td className="cart_product">
                    <a href=""><img src={require("../../../../../res/images/cart/two.jpg")} alt="" /></a>
                </td>
                <td className="cart_description">
                    <h4><a href="">Colorblock Scuba</a></h4>
                    <p>Web ID: 1089772</p>
                </td>
                <td className="cart_price">
                    <p>$59</p>
                </td>
                <td className="cart_quantity">
                    <div className="cart_quantity_button">
                        <a className="cart_quantity_up" href=""> + </a>
                        <input className="cart_quantity_input" type="text" name="quantity" defaultValue="1" autoComplete="off" size="2" />
                        <a className="cart_quantity_down" href=""> - </a>
                    </div>
                </td>
                <td className="cart_total">
                    <p className="cart_total_price">$59</p>
                </td>
                <td className="cart_delete">
                    <a className="cart_quantity_delete" href=""><i className="fa fa-times" /></a>
                </td>
            </tr>
        );
    }
}

export default CartItem;
