import React, { Component } from "react";
import Header from "./partials/header";
import Footer from "./partials/footer";

class MasterLayout extends Component {
    render() {
        return (<div>
            <Header />{ this.props.children }<Footer />
        </div>);
    }
}

export default MasterLayout;
