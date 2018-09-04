import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import getCategoryMenuAction from "../../../../../../actions/category/category_for_menu";

class BottomMenu extends Component {
    componentDidMount() {
        this.props.dispatch(getCategoryMenuAction());
    }
    render() {
        const { getCategoriesForMenu } = this.props;
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
                    <li><Link to="/"> Trang chủ</Link></li>
                    <li><Link to="/danh-muc"> Sản phẩm</Link></li>
                    <li className="dropdown">
                        <a>Danh mục<i className="fa fa-angle-down" /></a>
                        <ul role="menu" className="sub-menu">
                            {getCategoriesForMenu.menu_categories.map((category, index) =>{
                                return (<li key={ index }><Link to={`/danh-muc/${category.slug}`}>{category.category_name}</Link></li>);
                            })}
                        </ul>
                    </li>
                    <li><Link to="/tin-tuc"> Tin tức</Link></li>

                    <li><Link to="/lien-he"> Liên hệ</Link></li>
                </ul>
            </div>
        </div>);
    }
}

export default connect(function (state) {
    const { getCategoriesForMenu } = state;
    return { getCategoriesForMenu };
})(BottomMenu);
