import React, { Component } from "react";
import MasterLayout from "../layouts/master_layout";
import HomeSlider from "./partials/slider";
import HomeMainContent from "./partials/main-content";
import Helmet from "react-helmet";

class Home extends Component {
    render() {
        return (<MasterLayout>
            <Helmet><title>Trang chủ | Mua bán sản phẩm organic sạch</title></Helmet>
            <HomeSlider />
            <HomeMainContent />
        </MasterLayout>);
    }
}

export default Home;
