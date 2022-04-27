import React, {useEffect, useState} from "react";
import {Button, Card, Space, Spin} from "antd";
import commonApi from '../api/common'
import {GALLERY_BASE_URL} from '../config/api-urls';
import $ from 'jquery';
import Toolbar from "../components/toolbar";
import GalleryCollection from "../components/galleryCollection";


const GalleryPage = () => {
    // Definition States
    const [images, setImages] = useState([]);
    const [showSpinner, setShowSpinner] = useState(false);
    // load All state and initiate the other Variables
    useEffect(() => {

    }, []);

    const onSelectPicture = (e) => {
        commonApi.sendImageToApi(e.target.files[0], (res) => {
            if (res.ok === true) {
                $('.btnSearchPicture').click();
            }
        })
    }

    const loadAllGalleryFiles = () => {
        setShowSpinner(true);
        commonApi.loadAllGalleryData((data) => {
            setImages(data);
        });
        setShowSpinner(false);
    }

    const removePic = (index) => {
        const fileToDelete = images[index -1];
        commonApi.removeGalleryFile(fileToDelete, () => {
            $('.btnSearchPicture').click();
            $('.anticon-close').click();
        })

    }

    return (
        <Card title="گالری تصاویر" type={"inner"}>
            <Space>
                <Button type={"primary"}
                        size={"large"}
                        style={{paddingBottom: '8px'}}
                        className="btnSearchPicture"
                        onClick={loadAllGalleryFiles}>جستجوی تصاویر</Button>

                {showSpinner && (<Spin size="large"/>)}

                <div className="divider-1"/>
                <Toolbar create size={"large"} type={"circle"} onCreateClick={() => {
                    $('.btnChoosePicture').click()
                }}/>
            </Space>
            <div className="divider-1"/>

            <GalleryCollection images={images} baseApiURL={GALLERY_BASE_URL + '/rdc/'} removePic={removePic}/>

            <input className="input-group btnChoosePicture"
                   accept=".gif,.jpg,.jpeg,.png"
                   id="btnChoosePicture"
                   onInput={onSelectPicture}
                   type="file" style={{display: 'none'}}/>

        </Card>
    )
}

export default GalleryPage;