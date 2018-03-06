import React, { Component } from "react";
import MasterLayout from "../layouts/master_layout";
import Sidebar from "../common/sidebar";
import SingleNews from "./partials/single";
import Pagination from "../common/pagination";
import Title from "../common/title";

class News extends Component {
    render() {
        return (<MasterLayout>
            <Title title={"Tin tức"} />
            <section>
                <div className="container">
                    <div className="row">
                        <Sidebar />
                        <div className="col-sm-9">
                            <div className="blog-post-area">
                                <h2 className="title text-center">Tin tức mới nhất</h2>
                                <SingleNews />
                                <SingleNews />
                                <SingleNews />

                                <Pagination />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MasterLayout>);
    }
}

export default News;
