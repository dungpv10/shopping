import React, { Component } from "react";
import { connect } from "react-redux";
import getProductsNavigationAction from "../../../../../../actions/product/get_navigation_product";

class Navigation extends Component {
    constructor(props) {
        super(props);
        this.handClick = this.handClick.bind(this);
    }
    handClick(e) {
        e.preventDefault();
        this.props.dispatch(getProductsNavigationAction(this.props.category_id));
    }
    render() {
        return (
            <li className={this.props.active ? "active" : ""}>
                <a onClick={this.handClick} href={this.props.hash} data-toggle="tab">{this.props.title}</a>
            </li>
        );
    }
}

export default connect(function(state) {
    const { getNavigationProducts } = state;
    return { getNavigationProducts };
})(Navigation);
