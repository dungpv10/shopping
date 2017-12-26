import React, { Component } from "react";
import { connect } from "react-redux";
import getCategoriesForSidebarAction from "../../../../actions/category/category_for_sidebar";

class Categories extends Component {
    componentDidMount(){
        this.props.dispatch(getCategoriesForSidebarAction());
    }
    render() {
        console.log(this.props.getCategoriesForSidebar.sidebar_categories);
        return (
            <div className="panel-group category-products" id="accordian">
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordian" href="#sportswear">
                                <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                                Sportswear
                            </a>
                        </h4>
                    </div>
                    <div id="sportswear" className="panel-collapse collapse">
                        <div className="panel-body">
                            <ul>
                                <li><a href="#">Nike </a></li>
                                <li><a href="#">Under Armour </a></li>
                                <li><a href="#">Adidas </a></li>
                                <li><a href="#">Puma</a></li>
                                <li><a href="#">ASICS </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordian" href="#mens">
                                <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                                Mens
                            </a>
                        </h4>
                    </div>
                    <div id="mens" className="panel-collapse collapse">
                        <div className="panel-body">
                            <ul>
                                <li><a href="#">Fendi</a></li>
                                <li><a href="#">Guess</a></li>
                                <li><a href="#">Valentino</a></li>
                                <li><a href="#">Dior</a></li>
                                <li><a href="#">Versace</a></li>
                                <li><a href="#">Armani</a></li>
                                <li><a href="#">Prada</a></li>
                                <li><a href="#">Dolce and Gabbana</a></li>
                                <li><a href="#">Chanel</a></li>
                                <li><a href="#">Gucci</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title">
                            <a data-toggle="collapse" data-parent="#accordian" href="#womens">
                                <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                                Womens
                            </a>
                        </h4>
                    </div>
                    <div id="womens" className="panel-collapse collapse">
                        <div className="panel-body">
                            <ul>
                                <li><a href="#">Fendi</a></li>
                                <li><a href="#">Guess</a></li>
                                <li><a href="#">Valentino</a></li>
                                <li><a href="#">Dior</a></li>
                                <li><a href="#">Versace</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title"><a href="#">Kids</a></h4>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title"><a href="#">Fashion</a></h4>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title"><a href="#">Households</a></h4>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title"><a href="#">Interiors</a></h4>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title"><a href="#">Clothing</a></h4>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title"><a href="#">Bags</a></h4>
                    </div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h4 className="panel-title"><a href="#">Shoes</a></h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(function (state) {
    const { getCategoriesForSidebar } = state;
    return { getCategoriesForSidebar };
})(Categories);
