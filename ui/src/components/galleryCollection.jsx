import React from "react";
import {Image, Button, Space} from "antd";

const GalleryCollection = ({category, images, toolbar, removePic}) => {
    const handleDeleteImage = (e) => {
        removePic(e);
    }
    return (
        <Image.PreviewGroup preview={{ countRender: (current, total) =>
                <Button data-tag="test" type="primary" onClick={(curr) => handleDeleteImage(current)}>حذف عکس</Button> }}>
            <Space>
                {
                    images.map((source, index) => (
                        <Image width={200} src={source} key={index}/>
                    ))
                }
            </Space>
        </Image.PreviewGroup>
    )
}

export default GalleryCollection;