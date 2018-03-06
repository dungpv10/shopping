import React, { Component } from "react";
import TopFooter from "./footer/top_footer";

class Footer extends Component {
    render() {
        return (<footer id="footer">
            <TopFooter />

            <div className="footer-widget">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2">
                            <div className="single-widget">
                                <h2>Dịch vụ</h2>
                                <ul className="nav nav-pills nav-stacked">
                                    <li><a href="#">Tư vấn trực tiếp</a></li>
                                    <li><a href="#">Liên hệ</a></li>
                                    <li><a href="#">Chính sách</a></li>
                                    <li><a href="#">Hỏi đáp</a></li>
                                    <li><a href="#">Câu hỏi thường gặp</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="single-widget">
                                <h2>Danh mục nổi bật</h2>
                                <ul className="nav nav-pills nav-stacked">
                                    <li><a href="#">Thực phẩm</a></li>
                                    <li><a href="#">Đồ trẻ em</a></li>
                                    <li><a href="#">Organic</a></li>
                                    <li><a href="#">Gift Cards</a></li>
                                    <li><a href="#">Shoes</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="single-widget">
                                <h2>Chính sách</h2>
                                <ul className="nav nav-pills nav-stacked">
                                    <li><a href="#">Quy định</a></li>
                                    <li><a href="#">Bảo mật</a></li>
                                    <li><a href="#">Hoàn tiền</a></li>
                                    <li><a href="#">Thanh toán</a></li>
                                    <li><a href="#">Tri ân</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-2">
                            <div className="single-widget">
                                <h2>Về chúng tôi</h2>
                                <ul className="nav nav-pills nav-stacked">
                                    <li><a href="#">Thông tin cửa hàng</a></li>
                                    <li><a href="#">Nghề nghiệp</a></li>
                                    <li><a href="#">Vị trí kho hàng</a></li>
                                    <li><a href="#">Shopee</a></li>
                                    <li><a href="#">Lazada</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-3 col-sm-offset-1">
                            <div className="single-widget">
                                <h2>Nhận tin khuyến mại</h2>
                                <form action="#" className="searchform">
                                    <input type="text" placeholder="Your email address"/>
                                    <button type="submit" className="btn btn-default"><i className="fa fa-arrow-circle-o-right" /></button>
                                    <p>Vui lòng nhập email để được nhận bản tin <br/>khuyến mại sớm nhất</p>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="container">
                    <div className="row">
                        <p className="pull-left">Copyright © 2018 Mua-Ban Inc. dungpv10@gmail.com.</p>
                    </div>
                </div>
            </div>

        </footer>);
    }
}

export default Footer;
