import React, { Component } from "react";
import { Redirect } from 'react-router-dom';
import SendContact from "../../../../services/contact/send_contact";
import _ from "lodash";
class ContactForm extends Component{
    constructor(props) {
        super(props);
        this.state = {
            submit: false,
            data: {},
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        // this.state = {
        //     submit: true,
        // };
        // this.setState(this.state);

        SendContact(this.state.data).then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err);
        });
    }
    handleChange(e) {
        e.preventDefault();
        const name = e.target.name;
        this.state.data[name] = e.target.value;
        this.setState(this.state);
        console.log(this.state.data);
    }
    render() {
        if (this.state.submit) {
            return (<Redirect to="/" />);
        }
        return (<form id="main-contact-form" className="contact-form row" name="contact-form" onSubmit={this.handleSubmit.bind(this)}>
            <div className="form-group col-md-6">
                <input type="text" name="name" defaultValue={this.state.data.name} className="form-control" onChange={this.handleChange} required="required" placeholder="Họ và tên bạn" />
            </div>
            <div className="form-group col-md-6">
                <input type="email" name="email" className="form-control" onChange={this.handleChange} required="required" placeholder="Email" />
            </div>
            <div className="form-group col-md-12">
                <input type="text" name="subject" className="form-control" onChange={this.handleChange} required="required" placeholder="Tiêu đề liên hệ" />
            </div>
            <div className="form-group col-md-12">
                <textarea name="message" id="message" onChange={this.handleChange} required="required" className="form-control" rows="8" placeholder="Nội dung liên hệ" />
            </div>
            <div className="form-group col-md-12">
                <input type="submit" name="submit" className="btn btn-primary pull-right"
                       value="Gửi liên hệ" />
            </div>
        </form>);
    }

}

export default ContactForm;
