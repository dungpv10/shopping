import React, { Component } from "react";
import imageThumbnail from "../../../../../../res/images/home/iframe2.jpg";
import map from "../../../../../../res/images/home/map.jpg";

class TopFooter extends Component {
    render() {
        return (<div className="footer-top">
            <div className="container">
                <div className="row">
                    <div className="col-sm-2">
                        <div className="companyinfo">
                            <h2><span>Mua</span>-Bán</h2>
                            <p>Thế giới mua bán hàng online đảm bảo nhanh, gọn và tiện lợi trong nội thành Hà Nội</p>
                        </div>
                    </div>
                    <div className="col-sm-7">
                        <div className="col-sm-3">
                            <div className="video-gallery text-center">
                                <a href="#">
                                    <div className="iframe-img">
                                        <img src={imageThumbnail} alt="" />
                                    </div>
                                    <div className="overlay-icon">
                                        <i className="fa fa-play-circle-o" />
                                    </div>
                                </a>
                                <p>Circle of Hands</p>
                                <h2>24 DEC 2014</h2>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="video-gallery text-center">
                                <a href="#">
                                    <div className="iframe-img">
                                        <img src={imageThumbnail} alt="" />
                                    </div>
                                    <div className="overlay-icon">
                                        <i className="fa fa-play-circle-o" />
                                    </div>
                                </a>
                                <p>Circle of Hands</p>
                                <h2>24 DEC 2014</h2>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="video-gallery text-center">
                                <a href="#">
                                    <div className="iframe-img">
                                        <img src={imageThumbnail} alt=""/>
                                    </div>
                                    <div className="overlay-icon">
                                        <i className="fa fa-play-circle-o" />
                                    </div>
                                </a>
                                <p>Circle of Hands</p>
                                <h2>24 DEC 2014</h2>
                            </div>
                        </div>

                        <div className="col-sm-3">
                            <div className="video-gallery text-center">
                                <a href="#">
                                    <div className="iframe-img">
                                        <img src={imageThumbnail} alt="" />
                                    </div>
                                    <div className="overlay-icon">
                                        <i className="fa fa-play-circle-o" />
                                    </div>
                                </a>
                                <p>Circle of Hands</p>
                                <h2>24 DEC 2014</h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="address">
                            <img src={map} alt="" />
                            <p>187 - Phạm Văn Đồng - Nam Từ Liêm - Hà Nội</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default TopFooter;