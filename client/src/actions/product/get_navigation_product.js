import axios from "axios";
import { getNavigationProductsConst } from "../../consts";
import qs from "qs";

function getProductsNavigationAction(categoryId = 1) {
    function request() {
        return { type: getNavigationProductsConst.GET_NAVIGATION_REQUEST };
    }

    function success(response) {
        return { type: getNavigationProductsConst.GET_NAVIGATION_SUCCESS, products: response.data.products };
    }

    function fail(err) {
        return { type: getNavigationProductsConst.GET_NAVIGATION_FAIL, err };
    }
    return (dispatch) => {
        dispatch(request());
        axios.get(`${process.env.api_url}api/product/navigation/home-page?` + qs.stringify({
            category_id: categoryId,
        }))
            .then((response) => {
            response.data.code === 1 ? dispatch(success(response)) : dispatch(fail(null));
        })
            .catch(err => dispatch(fail(err)));
    };
}

export default getProductsNavigationAction;
