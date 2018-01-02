import { combineReducers } from "redux";
import { getCategoriesForMenu } from "./category/get_for_menu";
import { getCategoriesForSidebar } from "./category/get_for_sidebar";
import { getBannersOfHomePage } from "./banner/get_for_home_page";
import { getProductsForHomePage } from "./product/get_for_home_page";
import { getRecommendedProduct } from "./product/get_recommended_product";
import { getNavigationProducts } from "./product/get_navigation_product";
import { getProductsFromCart } from "./product/get_product_from_cart";
import { addProductToCart } from "./product/add_product_to_cart";

const rootReducer = combineReducers({
    getCategoriesForMenu,
    getCategoriesForSidebar,
    getBannersOfHomePage,
    getProductsForHomePage,
    getRecommendedProduct,
    getNavigationProducts,
    getProductsFromCart,
    addProductToCart,
});

export default rootReducer;
