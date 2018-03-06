import forMenuConst from "../../consts/category/for_menu_const";

const getCategoriesForMenu = function (state = { menu_categories: [], loading: false }, action) {
    switch (action.type) {
        case forMenuConst.GET_CATEGORY_FOR_MENU_REQUEST :
            return { ...state, loading: true };
            break;
        case forMenuConst.GET_CATEGORY_FOR_MENU_SUCCESS :
            return { ...state, loading: false, menu_categories: action.menu_categories };
            break;
        case forMenuConst.GET_CATEGORY_FOR_MENU_FAIL :
            return { ...state, loading: false, err: action.err };
            break;
        default :
            return state;
            break;
    }
};

export { getCategoriesForMenu };
