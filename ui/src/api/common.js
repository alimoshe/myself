import {GALLERY_BASE_URL} from '../config/api-urls';
const Common = {
    sendImageToApi : (image, sentImageCallback) => {
        const frmData = new FormData();
        frmData.delete('file');
        frmData.append('file', image);

        fetch(`${GALLERY_BASE_URL}/upload`,{body : frmData, method:'POST'})
            .then(res => res.json())
            .then(current => sentImageCallback(current));
    },
    loadAllGalleryData : (loadComplete) => {
        fetch(`${GALLERY_BASE_URL}/rdc`)
            .then(res => res.json())
            .then((allNames)=>{
                loadComplete(allNames);
            })
    },
    getImageFromServerByName : (fileName, getCompletion) => {
        fetch(`${GALLERY_BASE_URL}/rdc/${fileName}`)
            .then(data => data.json())
            .then((url) => {
                getCompletion(url);
            });
    },
    removeGalleryFile : (fileName, deleteCompletion) => {
        fetch(`${GALLERY_BASE_URL}/rdc/${fileName}`, {method : 'DELETE'})
            .then((result) => result.json())
            .then((removeConclusion) => deleteCompletion(removeConclusion));
    }
}

export default Common;