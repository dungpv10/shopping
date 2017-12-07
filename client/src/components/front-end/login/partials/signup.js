import React, { Component } from "react";


class SignupForm extends Component {
    render() {
        return (<form action="#">
            <input type="text" placeholder="Tên đầy đủ"/>
            <input type="email" placeholder="Địa chỉ Email" />
            <input type="password" placeholder="Mật khẩu" />
            <button type="submit" className="btn btn-default">Đăng ký</button>
            </form>);
    }
}

export default SignupForm;
