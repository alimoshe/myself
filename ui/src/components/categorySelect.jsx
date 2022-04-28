import React from "react";
import {Select} from "antd";
import {Option} from "antd/lib/mentions";

const CategorySelect = ({categories, handleChangeCollection}) => {

    const generateItems = () => {
        return  (
            categories.map((data) => (
                <Option key={data.id} value={data.id}>{data.title}</Option>
            )));
    }

    return(
        <Select
            mode="multiple"
            allowClear
            size={"large"}
            style={{ width: '95%' }}
            placeholder="لطفاْ یک مورد را انتخاب کنید"
            onChange={handleChangeCollection}
        >
            {
                generateItems()
            }
        </Select>
    )
}

export default CategorySelect;