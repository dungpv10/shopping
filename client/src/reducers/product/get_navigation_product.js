import { getNavigationProductsConst } from "../../consts";

function getNavigationProducts(state = { loading: true, products: [], err: null }, action){
    switch (action.type) {
        case getNavigationProductsConst.GET_NAVIGATION_REQUEST:
            return { ...state };
        case getNavigationProductsConst.GET_NAVIGATION_SUCCESS:
            return { ...state, products: action.products, loading: false };
        case getNavigationProductsConst.GET_NAVIGATION_FAIL:
            return state;
        default:
            return state;
    }
}

export { getNavigationProducts };
