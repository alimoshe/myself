import React, {useEffect, useState} from "react";
import {Button, Card, Select} from "antd";
import categoryApi from '../api/category';
import commonApi from '../api/common'
import {Option} from "antd/lib/mentions";
import $ from 'jquery';
import Toolbar from "../components/toolbar";
import GalleryCollection from "../components/galleryCollection";
import CategorySelect from "../components/categorySelect";



const GalleryPage = () => {
    // Definition States
    const [images, setImages] = useState([]);
    const [categories, setCategories] = useState([]);
    // load All state and initiate the category data
    useEffect(()=>{
        categoryApi.loadAllCategories((state) => {
            setCategories(state);
        });
    },[]);

    const onSelectPicture = (e) => {
        commonApi.sendImageToApi(e.target.files[0],(res)=>{
            if(res.ok === true){
                console.log(e.target.files[0]);
                const imagePath = URL.createObjectURL(e.target.files[0]);
                const imagesArray = [...images];
                imagesArray.push(imagePath);
                setImages(imagesArray);
            }
        })
    }

    const removePic = (index) => {
        const imagesArray = [...images];
        imagesArray.splice(Number(index) - 1, 1);
        setImages(imagesArray);
        $('.anticon-close').click();
    }

    return (
        <Card title="گالری تصاویر" type={"inner"}>

            <CategorySelect categories={categories}
                            handleChangeCollection={(data) => console.log(data)} />
            <Button type={"primary"}
                    size={"large"}
                    style={{paddingBottom:'8px'}}
            >جستجوی تصاویر</Button>
            <div className="divider-1"/>
            <Toolbar create size={"large"} type={"circle"}  onCreateClick={() => {$('.btnChoosePicture').click()}}/>
            <div className="divider-1" />

            <GalleryCollection images={images} removePic={removePic} />

            <input className="input-group btnChoosePicture"
                   accept=".gif,.jpg,.jpeg,.png"
                   id="btnChoosePicture"
                   onInput={onSelectPicture}
                   type="file" style={{display: 'none'}}/>
        </Card>
    )
}

export default GalleryPage;