import React, { Component } from "react";

class CartItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: this.props.product,
        };
        this.handleChange = this.handleChange.bind(this);
        this.removeItemFromCart = this.removeItemFromCart.bind(this);
    }
    handleClick(type, e) {
        e.preventDefault();
        this.setState({
            product: { total: type === "increase" ? this.state.product.total + 1 : this.state.product.total - 1 },
        });
    }
    handleChange(e) {
        e.preventDefault();
        this.setState({
            product: { total: e.target.value },
        });
    }
    removeItemFromCart(e) {
        e.preventDefault();
        //dispatch for remove product from cart
        this.setState({

        });
    }
    render() {
        const { product } = this.props;
        return (
            <tr>
                <td className="cart_product">
                    <a href=""><img src={product.thumbnail_path} alt="" /></a>
                </td>
                <td className="cart_description">
                    <h4><a href="">{product.product_name}</a></h4>
                    <p>Mô tả: Contrary to popular belief,  </p>
                </td>
                <td className="cart_price">
                    <p>${product.unit_price}</p>
                </td>
                <td className="cart_quantity">
                    <div className="cart_quantity_button">
                        <a className="cart_quantity_up" href="" onClick={this.handleClick.bind(this, "increase")}> + </a>
                        <input className="cart_quantity_input" type="text" name="quantity" defaultValue={this.props.product.total} onChange={this.handleChange} value={this.state.product.total} size="2" />
                        <a className="cart_quantity_down" href="" onClick={this.handleClick.bind(this, "decrease")}> - </a>
                    </div>
                </td>
                <td className="cart_total">
                    <p className="cart_total_price">${product.total_price}</p>
                </td>
                <td className="cart_delete">
                    <a className="cart_quantity_delete" onClick={this.removeItemFromCart} href=""><i className="fa fa-times" /></a>
                </td>
            </tr>
        );
    }
}

export default CartItem;
