import { bannerForHomePageConst } from "../../consts";
import axios from "axios";

function bannerForHomePageAction() {
    function request() {
        return { type: bannerForHomePageConst.GET_BANNER_REQUEST };
    }

    function success(response) {
        return { type: bannerForHomePageConst.GET_BANNER_SUCCESS, banners_home_page: response.data.banners };
    }

    function fail(err) {
        return { type: bannerForHomePageConst.GET_BANNER_FAIL, err };
    }

    return (dispatch) => {
        axios.get(`${process.env.api_url}api/banner/for-home-page`).then(response => {
            dispatch(request());
            if (response.data.code === 1) {
                dispatch(success(response));
            } else {
                dispatch(fail(null));
            }
        }).catch((err) => {
            dispatch(fail(err));
        });
    };
}

export default bannerForHomePageAction;
