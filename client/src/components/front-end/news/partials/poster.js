import React, { Component } from "react";

class Poster extends Component {
    render() {
        return (<div className="media commnets">
                <a className="pull-left" href="#">
                    <img className="media-object" src={require("../../../../../res/images/blog/man-one.jpg")} alt="" />
                </a>
                <div className="media-body">
                    <h4 className="media-heading">Annie Davis</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className="blog-socials">
                        <ul>
                            <li><a href=""><i className="fa fa-facebook"></i></a></li>
                            <li><a href=""><i className="fa fa-twitter"></i></a></li>
                            <li><a href=""><i className="fa fa-dribbble"></i></a></li>
                            <li><a href=""><i className="fa fa-google-plus"></i></a></li>
                        </ul>
                        <a className="btn btn-primary" href="">Other Posts</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Poster;
