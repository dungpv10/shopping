import React, { Component } from "react";

class BreadCrumb extends Component {
    render() {
        return (
            <div className="breadcrumbs">
                <ol className="breadcrumb">
                    <li><a href="#">Trang chủ</a></li>
                    <li className="active">{this.props.activeLabel}</li>
                </ol>
            </div>
        );
    }
}

export default BreadCrumb;
