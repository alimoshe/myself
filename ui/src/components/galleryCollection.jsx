import React from "react";
import {Image, Button, Space, Card, Divider, Row, Col} from "antd";
import './galleryCollection.css';

const GalleryCollection = ({images, toolbar, removePic, baseApiURL}) => {
    const handleDeleteImage = (e) => {
        removePic(e);
    }
    const BreakLine = (index) => {
        if (((+index) / 8) === 0)
            return (<br/>);
    }
    return (
        <div className="picture-panel" style={{display: "flex", flexWrap: "wrap"}}>
            <Image.PreviewGroup preview={{
                countRender: (current, total) =>
                    <Button type="primary" danger size={"large"} onClick={(curr) => handleDeleteImage(current)}>حذف
                        عکس</Button>
            }}>
                <Space>
                    <Row wrap={true}>

                            {
                                images.map((source, index) => (
                                    <Space>
                                    <Card title="بدون تخصیص" extra={<a href="#">بیشتر</a>}
                                          style={{width: 200, height: 240, textAlign: "right", marginLeft:"10px", marginBottom:"10px"}}>
                                        <Image width={180} height={180} src={baseApiURL + source} key={index}/>
                                    </Card>
                                    </Space>
                                ))
                            }

                    </Row>
                </Space>
            </Image.PreviewGroup>
        </div>
    )
}

export default GalleryCollection;