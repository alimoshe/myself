import {GALLERY_BASE_URL} from '../config/api-urls';
const Common = {
    sendImageToApi : (image, sentImageCallback) => {
        const frmData = new FormData();
        frmData.delete('file');
        frmData.append('file', image);

        fetch(`${GALLERY_BASE_URL}/upload`,{body : frmData, method:'POST'})
            .then(res => res.json())
            .then(current => sentImageCallback(current));
    }
}

export default Common;