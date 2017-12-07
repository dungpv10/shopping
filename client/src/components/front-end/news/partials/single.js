import React, { Component } from "react";
import { Link } from "react-router-dom";

class SingleNews extends Component {
    render() {
        return (<div className="single-blog-post">
            <h3>Girls Pink T Shirt arrived in store</h3>
            <div className="post-meta">
                <ul>
                    <li><i className="fa fa-user" /> Mac Doe</li>
                    <li><i className="fa fa-clock-o" /> 1:33 pm</li>
                    <li><i className="fa fa-calendar" /> DEC 5, 2013</li>
                </ul>
                <span>
										<i className="fa fa-star" />
										<i className="fa fa-star" />
										<i className="fa fa-star" />
										<i className="fa fa-star" />
										<i className="fa fa-star-half-o" />
								</span>
            </div>
            <a href="">
                <img src={require("../../../../../res/images/blog/blog-one.jpg")} alt="" />
            </a>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <Link className="btn btn-primary" to="/tin-tuc/tin-tuc-demo">Chi tiết</Link>
        </div>);
    }
}

export default SingleNews;
