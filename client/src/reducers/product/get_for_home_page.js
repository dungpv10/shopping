import { getProductsForHomepageConst } from "../../consts";

function getProductsForHomePage(state = { loading: true, products: [], err: false }, action) {
    switch (action.type) {
        case getProductsForHomepageConst.GET_PRODUCT_REQUEST:
            return state;
        case getProductsForHomepageConst.GET_PRODUCT_SUCCESS:
            return { ...state, products: action.products, loading: false };
        case getProductsForHomepageConst.GET_PRODUCT_FAIL:
            return { ...state, loading: false, err: action.err };
        default:
            return state;
    }
}

export { getProductsForHomePage };
