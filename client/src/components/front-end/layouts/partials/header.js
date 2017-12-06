import React, {Component} from "react";
import logoImage from "../../../../../res/images/home/logo.jpg";
import {NavLink, Link} from "react-router-dom";

class Header extends Component {
    render() {
        return (<header id="header">
            <div className="header_top">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="contactinfo">
                                <ul className="nav nav-pills">
                                    <li><a><i className="fa fa-phone" /> +2 95 01 88 821</a></li>
                                    <li><a><i className="fa fa-envelope" /> info@domain.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="social-icons pull-right">
                                <ul className="nav navbar-nav">
                                    <li><a><i className="fa fa-facebook" /></a></li>
                                    <li><a><i className="fa fa-twitter" /></a></li>
                                    <li><a><i className="fa fa-linkedin" /></a></li>
                                    <li><a><i className="fa fa-dribbble" /></a></li>
                                    <li><a><i className="fa fa-google-plus" /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-middle">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="logo pull-left">
                                <Link to="/"><img src={logoImage} alt="logo"/></Link>
                            </div>

                        </div>
                        <div className="col-sm-8">
                            <div className="shop-menu pull-right">
                                <ul className="nav navbar-nav">
                                    <li><NavLink to={"/shop"}><i className="fa fa-user" />Shop</NavLink></li>
                                    <li><a><i className="fa fa-star" /> <NavLink to={"/wishlist"}>Đã
                                        lưu</NavLink></a></li>
                                    <li><NavLink to={"/checkout"}><i className="fa fa-crosshairs" />Thanh
                                        toán</NavLink></li>
                                    <li><NavLink to={"/cart"}><i className="fa fa-shopping-cart" />Giỏ hàng
                                    </NavLink></li>
                                    <li><NavLink to={"/login"}><i className="fa fa-lock" />Đăng nhập</NavLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-9">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>
                            </div>
                            <div className="mainmenu pull-left">
                                <ul className="nav navbar-nav collapse navbar-collapse">
                                    <li><a href="index.html" className="active">Home</a></li>
                                    <li className="dropdown"><a>Shop<i className="fa fa-angle-down"></i></a>
                                        <ul role="menu" className="sub-menu">
                                            <li><a href="shop.html">Products</a></li>
                                            <li><a href="product-details.html">Product Details</a></li>
                                            <li><a href="checkout.html">Checkout</a></li>
                                            <li><a href="cart.html">Cart</a></li>
                                            <li><a href="login.html">Login</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown"><a>Blog<i className="fa fa-angle-down"></i></a>
                                        <ul role="menu" className="sub-menu">
                                            <li><a href="blog.html">Blog List</a></li>
                                            <li><a href="blog-single.html">Blog Single</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="404.html">404</a></li>
                                    <li><a href="contact-us.html">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="search_box pull-right">
                                <input type="text" placeholder="Search"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>);
    }
}

export default Header;