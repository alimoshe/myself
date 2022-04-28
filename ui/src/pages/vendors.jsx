import React, {useState} from "react";
import {Button, Card, Checkbox, Col, Divider, Form, Input, Modal, Row, Space, Table} from "antd";
import Toolbar from "../components/toolbar";
import CategorySelect from "../components/categorySelect";
import vendorsTableColumns from "../tables-columns/vendor-columns";

const VendorEntry = ({model, show, handleOk, handleCancel}) =>{
    return(
        <Modal width={"40%"}
               okButtonProps={{size:"large", htmlType:"submit"}}
               cancelButtonProps={{size:"large"}}
               title="ورود اطلاعات تامین کننده"
               visible={show}
               footer={null}
               onOk={handleOk}
               onCancel={handleCancel}>
            <Demo />
        </Modal>
    )
}

const Demo = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            initialValues={{
                remember: false,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type={"primary"} htmlType={"submit"} size={"large"}>دخیره تغییرات</Button>
            </Form.Item>
        </Form>
    );
};

const Vendors = () => {
    const [categories, setCategories] = useState([])
    const [showVendorEntry, setShowVendorEntry] = useState(false);
    return (

        <React.Fragment>
            <Card title="تامین گننده کالا و خدمات" type={"inner"} style={{width: '100%'}}>
                <Row>
                    <Col span={8}>
                        <Toolbar create
                                 read
                                 size={"large"}
                                 type={"circle"}
                                 onCreateClick={() => setShowVendorEntry(true)}
                        />
                    </Col>
                    <Col span={16}>
                        <Button type={"primary"} size={"large"} style={{float:"left"}}>test</Button>
                    </Col>
                </Row>
                <Divider/>
                <Row>
                    <Col span={12}>
                        <CategorySelect categories={categories}/>
                    </Col>
                    <Col span={12}>
                        test
                    </Col>
                </Row>
                <Divider/>
                <Row>
                    <Col span={24}>
                        <Table columns={vendorsTableColumns} pagination />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <VendorEntry show={showVendorEntry} handleCancel={() => setShowVendorEntry(false)} />
                    </Col>
                </Row>
            </Card>
        </React.Fragment>
    )
}

export default Vendors;