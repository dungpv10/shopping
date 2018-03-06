import { getRecommendedProductConst } from "../../consts";
import axios from "axios";

function getRecommendedProductAction() {
    function request() {
        return { type: getRecommendedProductConst.GET_PRODUCT_REQUEST };
    }

    function success(response) {
        return { type: getRecommendedProductConst.GET_PRODUCT_SUCCESS, products: response.data.products };
    }

    function fail(err) {
        return { type: getRecommendedProductConst.GET_PRODUCT_FAIL, err };
    }
    return (dispatch) => {
        axios.get(`${process.env.api_url}api/product/recommended`).then(response => {
            dispatch(request());
            if (response.data.code === 1) {
                dispatch(success(response));
            } else {
                dispatch(fail(null));
            }
        }).catch(err => dispatch(fail(err)));
    };
}

export default getRecommendedProductAction;
