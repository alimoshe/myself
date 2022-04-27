import React from "react";
import {Image, Button, Space} from "antd";

const GalleryCollection = ({images, toolbar, removePic, baseApiURL}) => {
    const handleDeleteImage = (e) => {
        removePic(e);
    }
    return (
        <Image.PreviewGroup preview={{ countRender: (current, total) =>
             <Button type="primary" danger size={"large"} onClick={(curr) => handleDeleteImage(current)}>حذف عکس</Button> }}>
            <Space>
                {
                    images.map((source, index) => (
                        <Image width={200} height={200} src={baseApiURL + source} key={index}/>
                    ))
                }
            </Space>
        </Image.PreviewGroup>
    )
}

export default GalleryCollection;