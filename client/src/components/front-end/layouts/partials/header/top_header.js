import React, { Component } from "react";

class TopHeader extends Component {
    render() {
        return (<div className="header_top">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="contactinfo">
                            <ul className="nav nav-pills">
                                <li><a><i className="fa fa-phone" /> +84 989 454 902</a></li>
                                <li><a><i className="fa fa-envelope" /> dungpv10@gmail.com</a></li>
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
        </div>);
    }
}

export default TopHeader;
