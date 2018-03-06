import axios from "axios";
import qs from "qs";

function sendContact(data) {
    const strData = qs.stringify(data);
    return axios.post(`${process.env.api_url}api/contact/send`, strData);
}

export default sendContact;
