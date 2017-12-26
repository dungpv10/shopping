import axios from "axios";

const categoryService = {
    getForMenu: () => {
        return new Promise((resolve, reject) => {
            axios.get(process.env.api_url + "api/category/menu");
        })
    },
};

export default categoryService;
