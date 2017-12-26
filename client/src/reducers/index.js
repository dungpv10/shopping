import { combineReducers } from "redux";
import { getCategoriesForMenu } from "./category/get_for_menu";
import { getCategoriesForSidebar } from "./category/get_for_sidebar";

const rootReducer = combineReducers({
    getCategoriesForMenu, getCategoriesForSidebar,
});

export default rootReducer;
