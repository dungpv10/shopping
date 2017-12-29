import { combineReducers } from "redux";
import { getCategoriesForMenu } from "./category/get_for_menu";
import { getCategoriesForSidebar } from "./category/get_for_sidebar";
import { getBannersOfHomePage } from "./banner/get_for_home_page";
import { getProductsForHomePage } from "./product/get_for_home_page";
import { getRecommendedProduct } from "./product/get_recommended_product";

const rootReducer = combineReducers({
    getCategoriesForMenu, getCategoriesForSidebar, getBannersOfHomePage, getProductsForHomePage, getRecommendedProduct,
});

export default rootReducer;
