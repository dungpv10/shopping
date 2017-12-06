import React, { Component } from "react";
import { Link } from 'react-router-dom';
class BottomMenu extends Component {
    render() {
        return (<div className="col-sm-9">
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
                    <li><Link to="/" className="active">Trang chủ</Link></li>
                    <li className="dropdown"><a>Sản phẩm<i className="fa fa-angle-down" /></a>
                        <ul role="menu" className="sub-menu">
                            <li><Link to="/danh-muc">Danh mục</Link></li>
                            <li><Link to="/san-pham">Sản phẩm</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/tin-tuc">Tin tức</Link></li>
                    <li><Link to="/404">404</Link></li>
                    <li><Link to="/lien-he">Liên hệ</Link></li>
                </ul>
            </div>
        </div>);
    }
}

export default BottomMenu;
