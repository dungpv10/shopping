import React, {Component} from "react";
import MasterLayout from "../layouts/master_layout";
import BreadCrumb from "../common/breadcrumb";
import ListItem from "./partials/list_item";

class Cart extends Component {
    render() {
        return (
            <MasterLayout>
                <section id="cart_items">
                    <div className="container">
                        <BreadCrumb activeLabel={"Giỏ hàng"}/>
                        <div className="table-responsive cart_info">
                            <ListItem />
                        </div>
                    </div>
                </section>
            </MasterLayout>
        );
    }
}

export default Cart;
