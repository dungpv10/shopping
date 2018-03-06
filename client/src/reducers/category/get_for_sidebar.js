import { forSidebarConst } from "../../consts";

function getCategoriesForSidebar(state = { loading: false, sidebar_categories: [] }, action){
    switch (action.type){
        case forSidebarConst.GET_CATEGORY_FOR_SIDEBAR_REQUEST :
            return { ...state, loading: true };
            break;
        case forSidebarConst.GET_CATEGORY_FOR_SIDEBAR_SUCCESS :
            return { ...state, loading: false, sidebar_categories: action.sidebar_categories };
        case forSidebarConst.GET_CATEGORY_FOR_SIDEBAR_FAIL :
            return { ...state, loading: false, err: action.err };
        default :
            return state;
    }
}

export { getCategoriesForSidebar };
