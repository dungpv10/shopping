import React, { Component } from 'react';
import shipping from "../../../../res/images/home/shipping.jpg";
import Categories from "./sidebar/categories";
import Branch from "./sidebar/branch";
import SearchByPrice from "./sidebar/search_by_price";

class Sidebar extends Component {
    render() {
        return (
            <div className="col-sm-3">
                <div className="left-sidebar">
                    <h2>Danh mục</h2>
                    <Categories />

                    <div className="brands_products">
                        <h2>Thương hiệu</h2>
                        <Branch />
                    </div>

                    <div className="price-range">
                        <h2>Khoảng giá</h2>
                        <SearchByPrice />
                    </div>

                    <div className="shipping text-center">
                        <img src={shipping} alt="" />
                    </div>

                </div>
            </div>
        );
    }
}
export default Sidebar;
