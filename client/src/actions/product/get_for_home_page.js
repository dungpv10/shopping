import { getProductsForHomepageConst } from "../../consts";
import axios from "axios";

function getProductsForHomePageAction (){
    function request() {
        return { type: getProductsForHomepageConst.GET_PRODUCT_SUCCESS };
    }

    function success(response) {
        return { type: getProductsForHomepageConst.GET_PRODUCT_SUCCESS, products: response.data.products };
    }

    function fail(err) {
        return { type: getProductsForHomepageConst.GET_PRODUCT_FAIL, err };
    }
    return (dispatch) => {
        axios.get(`${process.env.api_url}api/product/get-products-for-home-page`).then(response => {
            dispatch(request());
            if (response.data.code === 1) {
                dispatch(success(response));
            } else {
                dispatch(fail(null));
            }
        }).catch(err => dispatch(fail(err)));
    };
}

export default getProductsForHomePageAction;
