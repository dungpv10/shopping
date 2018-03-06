import React, { Component } from "react";
import { Link } from "react-router-dom";

class NoModels extends Component {
    render() {
        const { category } = this.props;
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title"><Link to={`/danh-muc/${category.slug}`}>{category.category_name}</Link></h4>
                </div>
            </div>
        );
    }
}

export default NoModels;
