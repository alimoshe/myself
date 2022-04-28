import React, {useEffect, useState} from "react";
import {Button, Card, Divider, Space, Spin} from "antd";
import commonApi from '../api/common'
import {GALLERY_BASE_URL} from '../config/api-urls';
import $ from 'jquery';
import Toolbar from "../components/toolbar";
import GalleryCollection from "../components/galleryCollection";
import MyPagination from "../components/myPagination";


const GalleryPage = () => {
    // Definition States
    const [images, setImages] = useState([]);
    const [showSpinner, setShowSpinner] = useState(false);
    const [totalPageItemsCount, setTotalPageItemsCount] = useState(1);
    const [currentPageSelected, setCurrentPageSelected] = useState(1);
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
        commonApi.loadPaginatedGalleryData(currentPageSelected,10,(data) => {
            setImages(data.content);
            setTotalPageItemsCount(data.length);
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

    const handleChangePage = (pageNumber) => {
        console.log(pageNumber);
        commonApi.loadPaginatedGalleryData(pageNumber,10,(data) => {
            setImages(data.content);
        });
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
            <Divider type={"horizontal"} orientation={"right"} />
            <MyPagination total={totalPageItemsCount}
                          onPageChanged={(e) => handleChangePage(+e)} />

        </Card>
    )
}

export default GalleryPage;