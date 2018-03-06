import { bannerForHomePageConst } from "../../consts";

function getBannersOfHomePage(state = { loading: false, banners_home_page: [] }, action){
    switch (action.type) {
        case bannerForHomePageConst.GET_BANNER_REQUEST :
            return { ...state, loading: true };
            break;
        case bannerForHomePageConst.GET_BANNER_SUCCESS :
            return { ...state, loading: false, banners_home_page: action.banners_home_page };
        case bannerForHomePageConst.GET_BANNER_FAIL :
            return { ...state, loading: false, err: action.err };
        default :
            return state;
    }
}

export { getBannersOfHomePage };
