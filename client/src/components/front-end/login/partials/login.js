import React, { Component } from "react";


class LoginForm extends Component {
    render() {
        return (<form action="#">
            <input type="text" placeholder="Tên đầy đủ" />
            <input type="email" placeholder="Địa chỉ Email" />
            <span>
            <input type="checkbox" className="checkbox" />
            Giữ đăng nhập
        </span>
        <button type="submit" className="btn btn-default">Đăng nhập</button>
            </form>);
    }
}

export default LoginForm;
