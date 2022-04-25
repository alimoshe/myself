import React, {useEffect, useState} from "react";
import {Button, Card, Select} from "antd";
import categoryApi from '../api/category';
import {Option} from "antd/es/mentions";
const GalleryPage = () => {
    const [categories, setCategories] = useState([{}]);
    useEffect(()=>{
        categoryApi.loadAllCategories((state) => {
            setCategories(state);
        });
    })
    const handleChange = (value) => {
        console.log(value);
    }
    const loadTest = (e) => {

    }
    return (
        <Card title="گالری تصاویر" type={"inner"}>

            <Select
                mode="multiple"
                allowClear
                size={"large"}
                style={{ width: '80%' }}
                placeholder="لطفاْ یک مورد را انتخاب کنید"
                onChange={handleChange}
            >
                {
                    categories.map((data, index) => (
                        <Option key={data.id} value={data.id}>{data.title}</Option>
                    ))
                }
            </Select>
            <Button type={"primary"}
                    size={"large"}
                    onClick={loadTest}
            >جستجوی تصاویر</Button>
        </Card>
    )
}

export default GalleryPage;