import React, { Component } from "react";

class Comment extends Component {
    render() {
        return (<ul className="media-list">
                <li className="media">

                    <a className="pull-left" href="#">
                        <img className="media-object" src={require("../../../../../res/images/blog/man-two.jpg")} alt="" />
                    </a>
                    <div className="media-body">
                        <ul className="sinlge-post-meta">
                            <li><i className="fa fa-user"></i>Janis Gallagher</li>
                            <li><i className="fa fa-clock-o"></i> 1:33 pm</li>
                            <li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a className="btn btn-primary" href=""><i className="fa fa-reply"></i>Replay</a>
                    </div>
                </li>
                <li className="media second-media">
                    <a className="pull-left" href="#">
                        <img className="media-object" src={require("../../../../../res/images/blog/man-three.jpg")} alt="" />
                    </a>
                    <div className="media-body">
                        <ul className="sinlge-post-meta">
                            <li><i className="fa fa-user"></i>Janis Gallagher</li>
                            <li><i className="fa fa-clock-o"></i> 1:33 pm</li>
                            <li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a className="btn btn-primary" href=""><i className="fa fa-reply"></i>Replay</a>
                    </div>
                </li>
                <li className="media">
                    <a className="pull-left" href="#">
                        <img className="media-object" src={require("../../../../../res/images/blog/man-four.jpg")} alt="" />
                    </a>
                    <div className="media-body">
                        <ul className="sinlge-post-meta">
                            <li><i className="fa fa-user"></i>Janis Gallagher</li>
                            <li><i className="fa fa-clock-o"></i> 1:33 pm</li>
                            <li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
                        </ul>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        <a className="btn btn-primary" href=""><i className="fa fa-reply"></i>Replay</a>
                    </div>
                </li>
            </ul>
        );
    }
}

export default Comment;
