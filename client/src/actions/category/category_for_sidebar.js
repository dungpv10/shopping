import { forSidebarConst } from "../../consts";
import axios from "axios";

function getCategoriesForSidebarAction() {
    function request() {
        return { type: forSidebarConst.GET_CATEGORY_FOR_SIDEBAR_REQUEST };
    }

    function success(response) {
        return {
            type: forSidebarConst.GET_CATEGORY_FOR_SIDEBAR_SUCCESS,
            sidebar_categories: response.data.categories,
        };
    }

    function fail(err) {
        return { type: forSidebarConst.GET_CATEGORY_FOR_SIDEBAR_FAIL, err };
    }

    return (dispatch) => {
        axios.get(`${process.env.api_url}api/category/sidebar`).then((response) => {
            dispatch(request());
            if (response.data.code === 1) {
                dispatch(success(response));
            } else {
                dispatch(fail(null));
            }
        }).catch(err => dispatch(fail(err)));
    };
}

export default getCategoriesForSidebarAction;
