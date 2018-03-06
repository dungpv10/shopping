import React, {Component} from "react";

class AdminLayout extends Component {
    render() {
        return (<div className="page">
            <header className="header">
                <nav className="navbar">
                    <div className="container-fluid">
                        <div className="navbar-holder d-flex align-items-center justify-content-between">
                            <div className="navbar-header">
                                <a href="index.html" className="navbar-brand">
                                    <div className="brand-text brand-big"><img src="img/logo.png" /></div>
                                    <div className="brand-text brand-small"><img src="img/logo.png" /></div>
                                </a>
                                <a id="toggle-btn" href="#"
                                   className="menu-btn active"><span/><span/><span/></a>
                            </div>
                            <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                                <li className="nav-item dropdown accounttop"><a id="accounts" rel="nofollow"
                                                                                data-target="#" href="#"
                                                                                data-toggle="dropdown"
                                                                                aria-haspopup="true"
                                                                                aria-expanded="false"
                                                                                className="nav-link">
                                    <div className="accountimg"><img src="img/avatar-1.jpg" alt="..."
                                                                     className="img-fluid rounded-circle"/></div>
                                    <div className="accountdetail">
                                        <span className="accountname">Mark Stephen</span>
                                        <span className="accountpland">Basic Plan, Upgrade Plan</span>
                                    </div>
                                </a>
                                    <ul aria-labelledby="accounts" className="dropdown-menu">
                                        <li><a rel="nofollow" href="#" className="dropdown-item">
                                            <div className="notification">
                                                <div className="notification-content"><i
                                                    className="fa fa-envelope bg-blue"></i>My Profile
                                                </div>
                                            </div>
                                        </a></li>
                                        <li><a rel="nofollow" href="#" className="dropdown-item">
                                            <div className="notification">
                                                <div className="notification-content"><i
                                                    className="fa fa-info-circle bg-blue"></i>Help
                                                </div>
                                            </div>
                                        </a></li>
                                        <li><a rel="nofollow" href="#" className="dropdown-item">
                                            <div className="notification">
                                                <div className="notification-content"><i
                                                    className="fa fa-sign-out bg-blue"></i>Log Out
                                                </div>
                                            </div>
                                        </a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown"><a id="notifications" rel="nofollow" data-target="#"
                                                                     href="#" data-toggle="dropdown"
                                                                     aria-haspopup="true" aria-expanded="false"
                                                                     className="nav-link"><i
                                    className="fa fa-bell-o"></i><span className="badge bg-red">12</span></a>
                                    <ul aria-labelledby="notifications" className="dropdown-menu">
                                        <li><a rel="nofollow" href="#" className="dropdown-item">
                                            <div className="notification">
                                                <div className="notification-content"><i
                                                    className="fa fa-shopping-cart bg-blue"></i>You have 6 New Order
                                                </div>
                                                <div className="notification-time">
                                                    <small>4 minutes ago</small>
                                                </div>
                                            </div>
                                        </a></li>
                                        <li><a rel="nofollow" href="#" className="dropdown-item">
                                            <div className="notification">
                                                <div className="notification-content"><i
                                                    className="fa fa-drivers-license-o bg-orange"></i>You have 2 Contact
                                                    Request
                                                </div>
                                                <div className="notification-time">
                                                    <small>4 minutes ago</small>
                                                </div>
                                            </div>
                                        </a></li>
                                        <li><a rel="nofollow" href="#" className="dropdown-item">
                                            <div className="notification">
                                                <div className="notification-content"><i
                                                    className="fa fa-tags bg-red"></i>You have 2 Quotation Request
                                                </div>
                                                <div className="notification-time">
                                                    <small>10 minutes ago</small>
                                                </div>
                                            </div>
                                        </a></li>
                                        <li><a rel="nofollow" href="#"
                                               className="dropdown-item all-notifications text-center"> <strong>view all
                                            notifications </strong></a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown"><a id="messages" rel="nofollow" data-target="#"
                                                                     href="#" data-toggle="dropdown"
                                                                     aria-haspopup="true" aria-expanded="false"
                                                                     className="nav-link"><i
                                    className="fa fa-comments"></i><span className="badge bg-red">10</span></a>
                                    <ul aria-labelledby="notifications" className="dropdown-menu">
                                        <li><a rel="nofollow" href="#" className="dropdown-item d-flex">
                                            <div className="msg-profile"><img src="img/avatar-1.jpg" alt="..."
                                                                              className="img-fluid rounded-circle"/>
                                            </div>
                                            <div className="msg-body">
                                                <h3 className="h5">Jason Doe</h3><span>Sent You Message</span>
                                            </div>
                                        </a></li>
                                        <li><a rel="nofollow" href="#" className="dropdown-item d-flex">
                                            <div className="msg-profile"><img src="img/avatar-2.jpg" alt="..."
                                                                              className="img-fluid rounded-circle"/>
                                            </div>
                                            <div className="msg-body">
                                                <h3 className="h5">Frank Williams</h3><span>Sent You Message</span>
                                            </div>
                                        </a></li>
                                        <li><a rel="nofollow" href="#" className="dropdown-item d-flex">
                                            <div className="msg-profile"><img src="img/avatar-3.jpg" alt="..."
                                                                              className="img-fluid rounded-circle"/>
                                            </div>
                                            <div className="msg-body">
                                                <h3 className="h5">Ashley Wood</h3><span>Sent You Message</span>
                                            </div>
                                        </a></li>
                                        <li><a rel="nofollow" href="#"
                                               className="dropdown-item all-notifications text-center"> <strong>Read all
                                            messages </strong></a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <div className="page-content d-flex align-items-stretch">
                <nav className="side-navbar">
                    <div className="sidebar-header d-flex align-items-center">
                        <div className="avatar"><img src="img/avatar-1.jpg" alt="..."
                                                     className="img-fluid rounded-circle"/></div>
                        <div className="title">
                            <p>Hello,</p>
                            <h1 className="h4">Mark Stephen</h1>
                            <p>Basic Plan, <a href="">Upgrade Plan</a></p>
                        </div>
                    </div>
                    <div className="viewsitebox">
                        <a href="" className="viewsite"><i className="fa fa-globe"></i>View Store</a>
                    </div>
                    <span className="heading"></span>
                    <ul className="list-unstyled">
                        <li><a href="index.html"><i className="fa fa-dashboard"></i>Dashboard</a></li>
                        <li className="active"><a href="tables.html"> <i className="fa fa-cube"></i>Product</a></li>
                        <li><a href="charts.html"> <i className="fa fa-shopping-cart"></i>Order</a></li>
                        <li><a href="forms.html"> <i className="fa fa-tags"></i>Quotes</a></li>
                        <li><a href="login.html"> <i className="fa fa-drivers-license-o"></i>Contact</a></li>
                        <li><a href="tables.html"> <i className="fa fa-calculator"></i>Currency Converter</a></li>
                        <li><a href="charts.html"> <i className="fa fa-bullhorn"></i>Trade Service</a></li>
                        <li><a href="forms.html"> <i className="fa fa-info-circle"></i>Help</a></li>
                        <li><a href="login.html"> <i className="fa fa-cog"></i>Setting</a></li>
                    </ul>
                </nav>
                <div className="content-inner">
                    <header className="page-header">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h2 className="no-margin-bottom">Add your Product</h2>
                                </div>
                                <div className="col-lg-6">

                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="container-fluid align-content-lg-center">
                        <div className="col-lg-12">
                            <div className="row steprow">
                                <div className="col-sm-4">
                                    <button className="btnGo btgreen">
                                        <p className="steptx">Select Category</p>
                                        <i className="fa fa-arrow-circle-right icox stepicon" aria-hidden="true"/>
                                    </button>
                                </div>
                                <div className="col-sm-4">
                                    <button className="btn btnGo btgreen disabled">
                                        <p className="steptx">Fill in product information</p>
                                        <i className="fa fa-arrow-circle-right icox stepicon" aria-hidden="true"/>
                                    </button>
                                </div>
                                <div className="col-sm-4">
                                    <button className="btn btnGo btgreen disabled">
                                        <p className="steptx">Waiting for approved</p>
                                        <i className="fa fa-arrow-circle-right icox stepicon" aria-hidden="true"/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <section>
                        <div className="container-fluid">
                            <div className="col-lg-12">
                                <div className="card">
                                    <div className="card-header d-flex align-items-center">
                                        <h3 className="h4">Select Category</h3>
                                    </div>
                                    <div className="card-body">
                                        <form className="form-horizontal">
                                            <div className="">
                                                <div className="row">

                                                    <div className="col-lg-6 d-flex align-items-center">

                                                    </div>
                                                </div>
                                                <div className="agreeterm align-items-center justify-content-between">
                                                    <span className="agreetx"><input type="checkbox"/> I have read and agree terms.</span>
                                                    <a className="btn btn-primary" href="add_product_information.html">Continue
                                                        add product information.</a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <footer className="main-footer">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-sm-12">
                                    Product Listing Policy - Intellectual Property Protection - Privacy Policy - Terms
                                    of Use
                                    <br/>&copy; 1999-2017 Domain.com. All rights reserved.
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
    }
    }

    export default AdminLayout;
