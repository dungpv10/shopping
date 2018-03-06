import React, { Component } from "react";

class ContactInformation extends Component {
    render() {
        return (
            <div className="contact-info">
                <h2 className="title text-center">Thông tin liên hệ </h2>
                <address>
                    <p>E-Shopper Inc.</p>
                    <p>935 W. Webster Ave New Streets Chicago, IL 60614, NY</p>
                    <p>Newyork USA</p>
                    <p>Mobile: +2346 17 38 93</p>
                    <p>Fax: 1-714-252-0026</p>
                    <p>Email: info@e-shopper.com</p>
                </address>
                <div className="social-networks">
                    <h2 className="title text-center">Kết nối với chúng tôi</h2>
                    <ul>
                        <li>
                            <a href="#"><i className="fa fa-facebook"/></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-twitter"/></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-google-plus"/></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-youtube"/></a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default ContactInformation;
