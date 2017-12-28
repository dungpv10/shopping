import { combineReducers } from "redux";
import { getCategoriesForMenu } from "./category/get_for_menu";
import { getCategoriesForSidebar } from "./category/get_for_sidebar";
import { getBannerOfHomePage } from "./banner/get_for_home_page";

const rootReducer = combineReducers({
    getCategoriesForMenu, getCategoriesForSidebar, getBannerOfHomePage,
});

export default rootReducer;
