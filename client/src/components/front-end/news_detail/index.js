import React, { Component } from "react";
import MasterLayout from "../layouts/master_layout";
import Sidebar from "../common/sidebar";
import ContentPost from "./content_post";
import Rating from "../news/partials/rating";
import Poster from "../news/partials/poster";
import Comment from "../news/partials/comment";
import CommentForm from "../news/partials/comment_form";

class NewsDetail extends Component {
    render() {
        return (<MasterLayout>
            <section>
                <div className="container">
                    <div className="row">
                        <Sidebar />
                        <div className="col-sm-9">
                            <ContentPost />
                            <Rating />

                            <div className="socials-share">
                                <a href=""><img src={require("../../../../res/images/blog/socials.jpg")} alt="" /></a>
                            </div>

                            <Poster />
                            <div className="response-area">
                                <h2>3 phản hồi</h2>
                                <Comment />
                            </div>
                            <CommentForm />
                        </div>
                    </div>
                </div>
            </section>
        </MasterLayout>);
    }
}

export default NewsDetail;
