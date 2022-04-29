import React, { useState } from "react";
import {
  Button,
  Card,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  Modal,
  Row,
  Space,
  Table,
} from "antd";
import Toolbar from "../components/toolbar";
import CategorySelect from "../components/categorySelect";
import vendorsTableColumns from "../tables-columns/vendor-columns";

const VendorEntry = ({ model, show, handleOk, handleCancel }) => {
  return (
    <Modal
      width={"40%"}
      okButtonProps={{ size: "large", htmlType: "submit" }}
      cancelButtonProps={{ size: "large" }}
      title="ورود اطلاعات تامین کننده"
      visible={show}
      footer={null}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      <VendorEntModal />
    </Modal>
  );
};

const VendorEntModal = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
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
        label="عنوان تامین کننده"
        name="title"
        rules={[
          {
            required: true,
            message: "عنوان الزامی است",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="کد اقتصادی"
        name="ecoCode"
        rules={[
          {
            required: false,
            message: "",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="آدرس پستی"
        name="address"
        rules={[
          {
            required: true,
            message: "آدرس الزامی است",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="آدرس وب سایت"
        name="websiteAddress"
        rules={[
          {
            required: false,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="نام رابط تامین کننده"
        name="agenFullName"
        rules={[
          {
            required: false,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="کد تامین کننده در وب سایت"
        name="code"
        rules={[
          {
            required: false,
            message: "Please input your username!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="شماره همراه رابط"
        name="authPhoneNumber"
        rules={[
          {
            required: true,
            message: "برای عملیات احراز هویت ازامی است",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type={"primary"} htmlType={"submit"} size={"large"}>
          دخیره تغییرات
        </Button>
      </Form.Item>
    </Form>
  );
};

const Vendors = () => {
  const [categories, setCategories] = useState([]);
  const [showVendorEntry, setShowVendorEntry] = useState(false);
  return (
    <React.Fragment>
      <Card
        title="تامین گننده کالا و خدمات"
        type={"inner"}
        style={{ width: "100%" }}
      >
        <Row>
          <Col span={8}>
            <Toolbar
              create
              read
              size={"large"}
              type={"circle"}
              onCreateClick={() => setShowVendorEntry(true)}
            />
          </Col>
          <Col span={16}>
            <Button type={"primary"} size={"large"} style={{ float: "left" }}>
              test
            </Button>
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={12}>
            <CategorySelect categories={categories} />
          </Col>
          <Col span={12}>test</Col>
        </Row>
        <Divider />
        <Row>
          <Col span={24}>
            <Table columns={vendorsTableColumns} pagination />
          </Col>
        </Row>
        <Row>
          <Col span={12}>
            <VendorEntry
              show={showVendorEntry}
              handleCancel={() => setShowVendorEntry(false)}
            />
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  );
};

export default Vendors;
