import React, { Component } from "react";

class HasModels extends Component {
    render() {
        const { category } = this.props;
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">
                        <a data-toggle="collapse" data-parent="#accordian" href={`#${category.slug}`}>
                            <span className="badge pull-right"><i className="fa fa-plus"/></span>
                            {`${category.category_name} (${category.total_models})`}
                        </a>
                    </h4>
                </div>
                <div id={category.slug} className="panel-collapse collapse">
                    <div className="panel-body">
                        <ul>
                            {category.models.map((model, index) => {
                                return (<li key={index}><a href="#">{`${model.model_name} (${model.total_products})`}</a></li>);
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default HasModels;
