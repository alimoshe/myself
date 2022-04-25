
import {CATEGORY_BASE_URL} from '../config/api-urls';
const CategoryApi = {
    loadAllCategories : (setState) => {

        fetch(`${CATEGORY_BASE_URL}/`)
            .then(data => data.json())
            .then(res => {
                setState(res);
            });
    }
}

export default CategoryApi;