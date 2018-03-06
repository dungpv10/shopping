import React, { Component } from "react";
import { connect } from "react-redux";
import getCategoriesForSidebarAction from "../../../../actions/category/category_for_sidebar";
import _ from "lodash";
import HasModels from "./categories/has_model";
import NoModels from "./categories/no_models";

class Categories extends Component {
    componentDidMount() {
        this.props.dispatch(getCategoriesForSidebarAction());
    }
    render() {
        const categories = this.props.getCategoriesForSidebar.sidebar_categories;
        return (
            <div className="panel-group category-products" id="accordian">
                {categories && categories.map((category, index) => {
                    if (category.models && category.models.length !== 0){
                        return (<HasModels key={index} category={category} />);
                    }
                    return (
                        <NoModels key={index} category={category} />
                    );
                })}
            </div>
        );
    }
}

export default connect(function (state) {
    const { getCategoriesForSidebar } = state;
    return { getCategoriesForSidebar };
})(Categories);
