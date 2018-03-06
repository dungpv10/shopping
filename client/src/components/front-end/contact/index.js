import React, { Component } from "react";
import MasterLayout from "../layouts/master_layout";
import GMap from "./partials/gmap";
import ContactForm from "./partials/form_contact";
import ContactInformation from "./partials/contact_infomation";
import Title from "../common/title";

class Contact extends Component {
    render() {
        return (
            <MasterLayout>
                <Title title="Liên hệ" />
                <div id="contact-page" className="container">
                    <div className="bg">
                        <div className="row">
                            <div className="col-sm-12">
                                <h2 className="title text-center">Liên hệ <strong>chúng tôi</strong></h2>
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
                                    <h2 className="title text-center">Liên hệ</h2>
                                    <div className="status alert alert-success" style={{display: "none"}} />
                                    <ContactForm />
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <ContactInformation />
                            </div>
                        </div>
                    </div>
                </div>
            </MasterLayout>
        );
    }
}

export default Contact;
