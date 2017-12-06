import React, { Component } from "react";
import BottomMenu from "./bottom_header/bottom_menu";
import Search from "./bottom_header/search";

class BottomHeader extends Component {
    render() {
        return (<div className="header-bottom">
            <div className="container">
                <div className="row">
                    <BottomMenu />
                    <Search />
                </div>
            </div>
        </div>);
    }
}

export default BottomHeader;
