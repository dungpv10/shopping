import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { required, email } from "../../../../validations";
// import { Notification } from "react-pnotify";

class LoginFormRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
            invalid: false,
            errors: {
                username: null,
                password: null,
            },
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFocus = this.handleFocus.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    getErrors(field) {
        return this.state.errors[field] ?
            (<span className={"has-error invalid-error"}>{this.state.errors[field]}</span>)
            : ("");
    }
    changeError(name, valueError = null) {
        this.state.errors[name] = valueError;
    }

    handleChange(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.state[name] = value;
        const requireText = required(value, name);
        this.changeError(name, requireText);
        this.setState(this.state);
    }
    handleFocus(e) {}
    handleBlur(e) {}

    handleLogin(e) {
        e.preventDefault();
    }

    render() {
        return (<form onSubmit={this.handleLogin}>
            {this.getErrors("username")}
            <Field
                onChange={this.handleChange}
                name={"username"}
                component={"input"}
                placeholder="Tên đăng nhập hoặc email" />
            {this.getErrors("password")}
            <Field onChange={this.handleChange}
                   type="password" name={"password"} component={"input"}
                   placeholder="Mật khẩu" />
            <button type="submit" className="btn btn-default">Đăng nhập</button>
        </form>);
    }
}

const LoginForm = reduxForm({
    form: "login",
})(LoginFormRedux);
export default LoginForm;
