import React, {useEffect, useState} from "react";
import {Button, Card, Select} from "antd";
import categoryApi from '../api/category';
import commonApi from '../api/common'
import {Option} from "antd/lib/mentions";
import $ from 'jquery';


const GalleryPage = () => {

    const [categories, setCategories] = useState([{}]);
    useEffect(()=>{
        categoryApi.loadAllCategories((state) => {
            setCategories(state);
        });
    },[]);
    const handleChange = (value) => {
        console.log(value);
    }

    const onSelectPicture = (e) => {
        commonApi.sendImageToApi(e.target.files[0],(res)=>{
            console.log(res);
        })
    }

    const generateItems = () => {
        return  (
            categories.map((data, index) => (
                <Option key={data.id} value={data.id}>{data.title}</Option>
            )));
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
                    generateItems()
                }
            </Select>
            <Button type={"primary"}
                    size={"large"}
                    onClick={() => {$('.btnChoosePicture').click()}}
                    style={{paddingBottom:'8px'}}
            >جستجوی تصاویر</Button>
            <input className="input-group btnChoosePicture"
                   accept=".gif,.jpg,.jpeg,.png"
                   id="btnChoosePicture"
                   onInput={onSelectPicture}
                   type="file" style={{display: 'none'}}/>
        </Card>
    )
}

export default GalleryPage;