import validator from "validator";

const required = (value, name = null) => {
    return !value.toString().trim().length ? `${name || "Giá trị"} không được để trống` : null;
};
const email = (value, name) => {
    if (!validator.isEmail(value)) {
        return "Email sai định dạng";
    }
};

export { required, email };
