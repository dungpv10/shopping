import React, { Component } from "react";
import MasterLayout from "../layouts/master_layout";
import HomeSlider from "./partials/slider";
import HomeMainContent from "./partials/main-content";
import Title from "../common/title";

class Home extends Component {
    render() {
        return (<MasterLayout>
            <Title />
            <HomeSlider />
            <HomeMainContent />
        </MasterLayout>);
    }
}

export default Home;
