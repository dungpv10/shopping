import { getRecommendedProductConst } from "../../consts";

function getRecommendedProduct(state = { loading: false, products: [], err: false }, action){
    switch (action.type) {
        case getRecommendedProductConst.GET_PRODUCT_REQUEST:
            return { ...state, loading: true };
        case getRecommendedProductConst.GET_PRODUCT_SUCCESS:
            return { ...state, products: action.products, loading: false };
        case getRecommendedProductConst.GET_PRODUCT_FAIl:
            return state;
        default:
            return state;
    }
}

export { getRecommendedProduct };
