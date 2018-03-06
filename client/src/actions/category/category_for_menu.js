import categoryConsts from "../../consts/category/for_menu_const";
import axios from "axios";

function getCategoryMenuAction() {
    function request() {
        return { type: categoryConsts.GET_CATEGORY_FOR_MENU_REQUEST };
    }

    function success(response) {
        return { type: categoryConsts.GET_CATEGORY_FOR_MENU_SUCCESS, menu_categories: response.data.categories };
    }

    function fail(err) {
        return { type: categoryConsts.GET_CATEGORY_FOR_MENU_FAIL, err };
    }

    return (dispatch) => {
        dispatch(request());

        axios.get(`${process.env.api_url}api/category/menu`)
            .then((response) => {
                if (response.data.code === 1) {
                    dispatch(success(response));
                } else {
                    dispatch(fail(response));
                }
            })
            .catch(err => dispatch(fail(err)));
    };
}


export default getCategoryMenuAction;
