import { getProductFromCartConst } from "../../consts";

function getProductsFromCart(state = { loading: true, products: [], err: null }, action){
    switch (action.type) {
        case getProductFromCartConst.GET_PRODUCT_REQUEST:
            return { ...state };
        case getProductFromCartConst.GET_PRODUCT_SUCCESS:
            return { ...state, products: action.products, loading: false };
        case getProductFromCartConst.GET_PRODUCT_FAIl:
            return state;
        default:
            return state;
    }
}

export { getProductsFromCart };
