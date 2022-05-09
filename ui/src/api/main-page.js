import {MAIN_PAGE_BASE_URL} from '../config/api-urls';

const mainPageApi = {
    loadAllSliderImagesName: (loadCompletion) => {
        fetch(`${MAIN_PAGE_BASE_URL}/rdc/slider/`)
            .then(data => data.json())
            .then(data => loadCompletion(data));
    }
};

export default mainPageApi;