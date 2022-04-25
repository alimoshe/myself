import axios from 'axios';
import {CATEGORY_BASE_URL} from '../config/api-urls';
const CategoryApi = {
    loadAllCategories : () => {
        let allCategories = [];
        axios.get(`${CATEGORY_BASE_URL}/`)
            .then(res => {
                console.log(res)
                allCategories = res;
            });
        return allCategories;
    }
}

export default CategoryApi;