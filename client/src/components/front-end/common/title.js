import React, { Component } from "react";
import Helmet from "react-helmet";

class Title extends Component {
    render() {
        return (
            <Helmet><title>{this.props.title || "Trang chủ"}</title></Helmet>
        );
    }
}

export default Title;
