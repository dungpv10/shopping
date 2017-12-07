import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import logoImage from "../../../../../../res/images/home/logo.jpg";

class TopMenu extends Component {
    render() {
        return (<div className="header-middle">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="logo pull-left">
                            <Link to="/"><img src={logoImage} alt="logo" /></Link>
                        </div>

                    </div>
                    <div className="col-sm-8">
                        <div className="shop-menu pull-right">
                            <ul className="nav navbar-nav">
                                <li><NavLink to={"/shop"}> <i className="fa fa-user" /> Cửa hàng </NavLink></li>
                                <li><NavLink to={"/wishlist"}> <i className="fa fa-star" /> Đã lưu </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/gio-hang"}> <i className="fa fa-shopping-cart" /> Giỏ hàng </NavLink>
                                </li>
                                <li>
                                    <NavLink to={"/login"}> <i className="fa fa-lock" /> Đăng nhập </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default TopMenu;
