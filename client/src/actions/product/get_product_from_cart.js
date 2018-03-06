import axios from "axios";
import { getProductFromCartConst } from "../../consts";

function getProductsFromCartAction() {
    function request() {
        return { type: getProductFromCartConst.GET_PRODUCT_REQUEST };
    }

    function success(response) {
        return { type: getProductFromCartConst.GET_PRODUCT_SUCCESS, products: response.data.products };
    }

    function fail(err) {
        return { type: getProductFromCartConst.GET_PRODUCT_FAIL, err };
    }
    return (dispatch) => {
        axios.get(`${process.env.api_url}api/product/get-cart`).then(response => {
            dispatch(request());
            if (response.data.code === 1) {
                dispatch(success(response));
            } else {
                dispatch(fail(null));
            }
        }).catch(err => dispatch(fail(err)));
    };
}

export default getProductsFromCartAction;
