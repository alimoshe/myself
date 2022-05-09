import React, {useEffect, useState} from 'react';
import {Alert, Button, Card, Carousel, Col, Row, Space, Upload} from "antd";
import {UploadOutlined} from "@ant-design/icons";
import {MAIN_PAGE_BASE_URL} from '../config/api-urls';
import mainPageApi from "../api/main-page";

const contentStyle = {
    color: '#fff',
    textAlign: 'center',
    background: '#9fb7f8',
}
const Slider = ({images}) => {
    return (
        <React.Fragment>
            <Carousel dotPosition={"bottom"} style={{
                borderRadius: "10px",
                marginTop: "15px",
                backgroundColor: '#9fb7f8',
                textAlign: 'center',
                position:"relative"
            }}>
                {
                    images.map((data, index) => (
                        <div style={{textAlign:'center', top:'50%'}}>
                        <h3 style={contentStyle}>
                            <img src={MAIN_PAGE_BASE_URL + '/rdc/slider/' + data} key={index} alt={data}/>
                        </h3>
                        </div>
                    ))
                }
            </Carousel>

        </React.Fragment>
    )
}
const MainPage = () => {
    const [alertObject, setAlertObject] = useState({
        style: {display: "none"},
    });
    const [sliderImages, setSliderImages] = useState([]);
    const loadAllSliderItems = (setState) => {
        mainPageApi.loadAllSliderImagesName((data) => {
            setState(data);
        })
    }
    useEffect(() => {
        loadAllSliderItems((state) => {
            setSliderImages(state);
            console.log(state);
        })
    }, []);

    const printFileList = (fileName) => {
        console.log(fileName);
    }
    return (
        <React.Fragment>
            <Alert showIcon {...alertObject} />
            <Card title="تنظیمات اسلایدر" type={"inner"} style={{width: "100%"}}>
                <Row>
                    <Col span={8}>
                        <Space direction="vertical" style={{width: '100%'}} size="large">
                            <Upload
                                action={`${MAIN_PAGE_BASE_URL}/upload/slider`}
                                listType="picture"

                                defaultFileList={[...sliderImages]}
                                onChange={printFileList}
                            >
                                <Button size={"large"} icon={<UploadOutlined/>}>انتخاب عکس برای اسلایدر</Button>
                            </Upload>
                        </Space>
                    </Col>
                    <Col span={16}>
                        <Slider images={sliderImages}/>
                    </Col>
                </Row>
            </Card>
        </React.Fragment>
    )
}

export default MainPage;