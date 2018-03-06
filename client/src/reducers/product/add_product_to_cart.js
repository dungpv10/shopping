import { addProductToCartConst } from "../../consts";

function addProductToCart(state = { loading: true, success: false, err: null }, action) {
    switch (action.type) {
        case addProductToCartConst.ADD_PRODUCT_TO_CART_REQUEST:
            return state;
        case addProductToCartConst.ADD_PRODUCT_TO_CART_SUCCESS:
            return { ...state, loading: false, err: null, success: true };
        case addProductToCartConst.ADD_PRODUCT_TO_CART_FAIL:
            return { ...state, success: false, err: action.err };
        default:
            return state;
    }
}

export { addProductToCart };
