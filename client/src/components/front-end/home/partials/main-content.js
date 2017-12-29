import React, { Component } from "react";
import Sidebar from "../../common/sidebar";

import HomeMainProduct from "./main-content/main-product";
import HomeNav from "./main-content/nav";
import HomeRecommended from "./main-content/recommended";

class HomeMainContent extends Component {
    render() {
        return (<section>
            <div className="container">
                <div className="row">
                    <Sidebar />

                    <div className="col-sm-9 padding-right">
                        <HomeMainProduct />

                        <HomeNav />

                        <HomeRecommended />

                    </div>
                </div>
            </div>
        </section>);
    }
}

export default HomeMainContent;
