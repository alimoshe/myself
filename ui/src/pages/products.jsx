import React from "react";
import {Card, Table} from "antd";
import ProductsModel from "../static-models/proudctsModel";
const columns = [
    {
        title: 'کد کالا',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'نام کالا',
        dataIndex: 'title',
        key: 'title',
    },
    {
        title: 'قیمت اصلی',
        dataIndex: 'price',
        key: 'price',
    },
    {
        title: 'تخفیف',
        dataIndex: 'discount',
        key: 'discount',
    },
];
const ProductsPage = () => {
    return(
        <Card title="محصولات" type={"inner"}>
            <Table dataSource={ProductsModel} columns={columns} bordered />
        </Card>
    )
}

export default ProductsPage;