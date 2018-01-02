import React, { Component } from "react";
import MasterLayout from "../layouts/master_layout";
import LoginForm from "./partials/login";
import SignupForm from "./partials/signup";

class Login extends Component {
    render() {
        return (<MasterLayout>
            <section id="form">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 col-sm-offset-1">
                            <div className="login-form">
                                <h2>Đăng nhập</h2>
                                <LoginForm />
                            </div>
                        </div>
                        <div className="col-sm-1">
                            <h2 className="or">Hoặc</h2>
                        </div>
                        <div className="col-sm-4">
                            <div className="signup-form">
                                <h2>Đăng ký tài khoản</h2>
                                <SignupForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MasterLayout>);
    }
}

export default Login;
