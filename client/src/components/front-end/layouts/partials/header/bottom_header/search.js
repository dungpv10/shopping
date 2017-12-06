import React, { Component } from "react";

class Search extends Component {
    render() {
        return (<div className="col-sm-3">
            <div className="search_box pull-right">
                <input type="text" placeholder="Search" />
            </div>
        </div>);
    }
}

export default Search;
