import React, { Component } from "react";
import MasterLayout from "../layouts/master_layout";
import HomeSlider from "./partials/slider";
import HomeMainContent from "./partials/main-content";


class Home extends Component {
    render() {
        return (<MasterLayout>
            <HomeSlider />
            <HomeMainContent />
        </MasterLayout>);
    }
}

export default Home;
