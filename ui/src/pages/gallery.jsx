import React from "react";
import {Button, Card, Select} from "antd";

const GalleryPage = ({loadAll}) => {

    const handleChange = (value) => {
        console.log(value);
    }

    return (
        <Card title="گالری تصاویر" type={"inner"}>
            <Button type={"primary"} size={"large"}>انتخاب تصویر</Button>
            <Select
                mode="multiple"
                allowClear
                size={"large"}
                style={{ width: '80%' }}
                placeholder="لطفاْ یک مورد را انتخاب کنید"
                onChange={handleChange}
            >

            </Select>
        </Card>
    )
}

export default GalleryPage;