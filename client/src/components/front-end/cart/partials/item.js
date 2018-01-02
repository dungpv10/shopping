import React, { Component } from "react";

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: this.props.product,
        };
    }
    handleClick(e, type) {
        e.preventDefault();
        console.log(type);
    }
    render() {
        const { product } = this.props;
        return (
            <tr>
                <td className="cart_product">
                    {/*<a href=""><img src={product.thumbnail_path} alt="" /></a>*/}
                </td>
                <td className="cart_description">
                    <h4><a href="">{product.product_name}</a></h4>
                    <p>Web ID: 1089772</p>
                </td>
                <td className="cart_price">
                    <p>${product.unit_price}</p>
                </td>
                <td className="cart_quantity">
                    <div className="cart_quantity_button">
                        <a className="cart_quantity_up" href="" onClick={(e) => this.handleClick("increase")}> + </a>
                        <input className="cart_quantity_input" type="text" name="quantity" defaultValue={product.total} autoComplete="off" size="2" />
                        <a className="cart_quantity_down" href="" onClick={(e) => this.handleClick("decrease")}> - </a>
                    </div>
                </td>
                <td className="cart_total">
                    <p className="cart_total_price">${product.total_price}</p>
                </td>
                <td className="cart_delete">
                    <a className="cart_quantity_delete" href=""><i className="fa fa-times" /></a>
                </td>
            </tr>
        );
    }
}

export default CartItem;
