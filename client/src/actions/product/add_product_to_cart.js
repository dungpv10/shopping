import qs from "qs";
import axios from "axios";
import { addProductToCartConst } from "../../consts";

function addProductToCartAction(productId) {
    function request() {
        return { type: addProductToCartConst.ADD_PRODUCT_TO_CART_SUCCESS };
    }
    function success() {
        return { type: addProductToCartConst.ADD_PRODUCT_TO_CART_SUCCESS };
    }
    function fail(err) {
        return { type: addProductToCartConst.ADD_PRODUCT_TO_CART_FAIL, err };
    }
    return dispatch => {
        dispatch(request());
        axios.get(`${process.env.api_url}api/product/add-product-to-cart?` + qs.stringify({ product_id: productId })).then(response => {
            response.data.code === 1 ? dispatch(success()) : dispatch(fail());
        }).catch(err => dispatch(fail(err)));
    };
}

export default addProductToCartAction;
