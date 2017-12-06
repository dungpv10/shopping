import React, {Component} from "react";

import TopHeader from "./header/top_header";
import TopMenu from "./header/top_menu";
import BottomHeader from "./header/bottom_header";

class Header extends Component {
    render() {
        return (<header id="header">
            <TopHeader />

            <TopMenu />

            <BottomHeader />
        </header>);
    }
}

export default Header;