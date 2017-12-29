import React, { Component } from "react";
import { connect } from "react-redux";
import pricing from "../../../../../res/images/home/pricing.jpg";
import bannerForHomePageAction from "../../../../actions/banner/banner_for_home_page";

class HomeSlider extends Component {
    componentDidMount() {
        this.props.dispatch(bannerForHomePageAction());
    }
    render() {
        const { getBannersOfHomePage } = this.props;

        return (
            <section id="slider">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div id="slider-carousel" className="carousel slide" data-ride="carousel">
                                <ol className="carousel-indicators">
                                    {getBannersOfHomePage.banners_home_page.map((banner, index) => {
                                        return (<li key={index} data-target="#slider-carousel" data-slide-to={index} className={index === 0 ? "active" : ""} />);
                                    })}
                                </ol>
                                <div className="carousel-inner">
                                    {getBannersOfHomePage.banners_home_page.map((banner, index) => {
                                        return (
                                            <div key={index + 1} className={"item " + (index === 0 ? "active" : "")}>
                                                <div className="col-sm-6">
                                                    <h1><span>Mua</span>-Bán</h1>
                                                    <h2>{banner.sub_title}</h2>
                                                    <p>{banner.description}</p>
                                                    <button type="button" className="btn btn-default get">Xem chi tiết</button>
                                                </div>
                                                <div className="col-sm-6">
                                                    <img src={banner.image_path} className="girl img-responsive" alt="" />
                                                    <img src={pricing}  className="pricing" alt="" />
                                                </div>
                                            </div>
                                        );
                                    })}

                                </div>

                                <a href="#slider-carousel" className="left control-carousel hidden-xs" data-slide="prev">
                                    <i className="fa fa-angle-left"></i>
                                </a>
                                <a href="#slider-carousel" className="right control-carousel hidden-xs" data-slide="next">
                                    <i className="fa fa-angle-right"></i>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect( function(state){
    const { getBannersOfHomePage } = state;
    return { getBannersOfHomePage };
})(HomeSlider);
