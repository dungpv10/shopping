import React, {Component} from "react";
import MasterLayout from "../layouts/master_layout";
import GMap from './partials/gmap';
import ContactForm from "./partials/form_contact";

class Contact extends Component {
    render() {
        return (
            <MasterLayout>
                <div id="contact-page" className="container">
                    <div className="bg">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2 className="title text-center">Contact <strong>Us</strong></h2>
                                <div className="contact-map">
                                <GMap isMarkerShown
                                      googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                                      loadingElement={<div style={{ height: `100%` }} />}
                                      containerElement={<div style={{ height: `400px` }} />}
                                      mapElement={<div style={{ height: `100%` }} />}
                                />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-8">
                                <div className="contact-form">
                                    <h2 className="title text-center">Get In Touch</h2>
                                    <div className="status alert alert-success" style={{display: "none"}} ></div>
                                    <ContactForm />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="contact-info">
                                    <h2 className="title text-center">Contact Info</h2>
                                    <address>
                                        <p>E-Shopper Inc.</p>
                                        <p>935 W. Webster Ave New Streets Chicago, IL 60614, NY</p>
                                        <p>Newyork USA</p>
                                        <p>Mobile: +2346 17 38 93</p>
                                        <p>Fax: 1-714-252-0026</p>
                                        <p>Email: info@e-shopper.com</p>
                                    </address>
                                    <div className="social-networks">
                                        <h2 className="title text-center">Social Networking</h2>
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
                            </div>
                        </div>
                    </div>
                </div>
            </MasterLayout>
        );
    }
}

export default Contact;
