import React, { Component } from "react";

class CommentForm extends Component {
    render() {
        return (<div className="replay-box">
                <div className="row">
                    <div className="col-sm-4">
                        <h2>Leave a replay</h2>
                        <form>
                            <div className="blank-arrow">
                                <label>Your Name</label>
                            </div>
                            <span>*</span>
                            <input type="text" placeholder="write your name..." />
                            <div className="blank-arrow">
                                <label>Email Address</label>
                            </div>
                            <span>*</span>
                            <input type="email" placeholder="your email address..." />
                            <div className="blank-arrow">
                                <label>Web Site</label>
                            </div>
                            <input type="email" placeholder="current city..." />
                        </form>
                    </div>
                    <div className="col-sm-8">
                        <div className="text-area">
                            <div className="blank-arrow">
                                <label>Your Name</label>
                            </div>
                            <span>*</span>
                            <textarea name="message" rows="11" />
                            <a className="btn btn-primary" href="">post comment</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CommentForm;
