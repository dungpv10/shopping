import React, { Component } from "react";
import { Redirect } from 'react-router-dom';

class ContactForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            submit: false,
        }
    }
    render() {
        if(this.state.submit){
            return (<Redirect to="/" />);
        }
        return (<form id="main-contact-form" className="contact-form row" name="contact-form" onSubmit={this.handleSubmit.bind(this)}
                      method="post">
            <div className="form-group col-md-6">
                <input type="text" name="name" className="form-control" required="required" placeholder="Name" />
            </div>
            <div className="form-group col-md-6">
                <input type="email" name="email" className="form-control" required="required" placeholder="Email" />
            </div>
            <div className="form-group col-md-12">
                <input type="text" name="subject" className="form-control" required="required" placeholder="Subject" />
            </div>
            <div className="form-group col-md-12">
                <textarea name="message" id="message" required="required" className="form-control" rows="8" placeholder="Your Message Here" />
            </div>
            <div className="form-group col-md-12">
                <input type="submit" name="submit" className="btn btn-primary pull-right"
                       value="Submit" />
            </div>
        </form>);
    }
    handleSubmit(e){
        e.preventDefault();
        this.state = {
            submit: true,
        }
        this.setState(this.state);
    }
}

export default ContactForm;
