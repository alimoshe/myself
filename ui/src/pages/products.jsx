import React, { useEffect, useState } from "react";
import {
  Alert,
  Card,
  Table,
  Row,
  Col,
  Divider,
  Modal,
  Form,
  Input,
  InputNumber,
  Button,
  Space,
} from "antd";
import productColumns from "../tables-columns/product-columns";
import Toolbar from "../components/toolbar";
import productApi from "../api/product";
import $ from "jquery";

const ProductEntry = ({
  show,
  onCancel,
  renderModel,
  onCreateComplete,
  onUpdateComplete,
  updateMode,
}) => {
  const onFinish = (values) => {
    if (updateMode === true) {
      productApi.updateProduct(renderModel, values, (result) => {
        onUpdateComplete(result);
      });
    } else {
      console.log("new Product ", values);
      productApi.createNewProduct(values, (result) => {
        onCreateComplete(result);
      });
    }
  };
  const onFinishFailed = (values) => {};
  return (
    <Modal
      width={"50%"}
      okButtonProps={{ size: "large", htmlType: "submit" }}
      cancelButtonProps={{ size: "large" }}
      title="ورود اطلاعات کالاها"
      visible={show}
      footer={null}
      destroyOnClose={true}
      onCancel={onCancel}
    >
      <Form
        name="base"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          ...renderModel,
          remember: false,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="کد کالا"
          name="code"
          rules={[
            {
              required: true,
              message: "کد کالا الزامی است",
            },
          ]}
        >
          <Input />
        </Form.Item>
        {/* ****************************** another next one  */}
        <Form.Item
          label="عنوان کالا"
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
        {/* ****************************** another next one  */}
        <Form.Item
          label="قیمت کالا"
          name="registerPrice"
          rules={[
            {
              required: false,
              message: "عنوان الزامی است",
            },
          ]}
        >
          <InputNumber width="10%" min={1000} max={9999999999} />
        </Form.Item>
        {/* ****************************** another next one  */}
        <Form.Item
          label="درصد تخفیف کالا"
          name="discountPercent"
          rules={[
            {
              required: false,

              message: "عنوان الزامی است",
            },
          ]}
        >
          <InputNumber width="10%" min={0} max={100} />
        </Form.Item>
        {/* ****************************** another next one  */}
        <Form.Item
          label="حداقل سفارش"
          name="minimumStock"
          rules={[
            {
              required: false,
              message: "عنوان الزامی است",
            },
          ]}
        >
          <InputNumber width="10%" min={0} max={100} />
        </Form.Item>
        {/* ****************************** another next one  */}
        <Form.Item
          label="تعداد در واحد فرعی"
          name="secondaryUnitValue"
          rules={[
            {
              required: false,
              message: "عنوان الزامی است",
            },
          ]}
        >
          <InputNumber width="10%" min={1} max={100} />
        </Form.Item>
        <Button type={"primary"} htmlType={"submit"} size={"large"}>
          ذخیره تغییرات
        </Button>
      </Form>
    </Modal>
  );
};

const ProductsPage = () => {
  const [alertObject, setAlertObject] = useState({
    style: { display: "none" },
  });
  const [products, setProducts] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [showPrdouctEntry, setShowProductEntry] = useState(false);
  const [updateMode, setUpdateMode] = useState(false);
  const handleAddProduct = (e) => {
    setShowProductEntry(true);
    setUpdateMode(false);
  };
  function onChange(pagination, filters, sorter, extra) {
    console.log("params", filters);
  }

  const selectionCheckCriteria = () => {
    if (selectedRowKeys.length < 1) {
      setAlertObject({
        style: { display: "" },
        type: "error",
        message: "لطفا یک سطر را انتخاب نمائید تا عملیات بر روی آن انجام شود",
      });
      return false;
    } else if (selectedRowKeys.length > 1) {
      setAlertObject({
        style: { display: "" },
        type: "warning",
        message: `این عملیات فقط نیاز به انتخاب یک سطر دارد`,
      });
      return false;
    }
    return true;
  };

  useEffect(() => {
    productApi.loadAllProducts((result) => {
      setProducts(result);
    });
  }, []);

  const handleRemoveProduct = () => {
    if (selectionCheckCriteria()) {
      setAlertObject({
        style: { display: "none" },
      });
      productApi.removeProduct(selectedRowKeys[0]._id, (result) => {
        if (result.err) {
          setAlertObject({
            style: { display: "" },
            type: "error",
            message: result.err.errMessage,
          });
          $(".ant-modal-close-x").click();
        } else {
          setAlertObject({
            style: { display: "" },
            type: "success",
            message: " کالای مد نظر حذف شد",
          });
          $(".ant-modal-close-x").click();
          productApi.loadAllProducts((result) => {
            setProducts(result);
          });
        }
      });
    }
  };

  const handleUpdateProduct = () => {
    if (selectionCheckCriteria()) {
      setAlertObject({
        style: { display: "none" },
      });
      setShowProductEntry(true);
      setUpdateMode(true);
    }
  };

  const handleCreationProduct = (result) => {
    if (result.err) {
      setAlertObject({
        style: { display: "" },
        type: "error",
        message: result.err.errMessage,
      });
      $(".ant-modal-close-x").click();
    } else {
      setAlertObject({
        style: { display: "" },
        type: "success",
        message: "اطلاعات ثبت شد",
      });
      $(".ant-modal-close-x").click();
      productApi.loadAllProducts((result) => {
        setProducts(result);
      });
    }
  };

  const handleUpdateCompletion = (result) => {
    if (result.err) {
      setAlertObject({
        style: { display: "" },
        type: "error",
        message: result.err.errMessage,
      });
      $(".ant-modal-close-x").click();
    } else {
      setAlertObject({
        style: { display: "" },
        type: "success",
        message: "اطلاعات ثبت شد",
      });
      $(".ant-modal-close-x").click();

      productApi.loadAllProducts((result) => {
        setProducts(result);
      });
    }
  };
  const searchByTitle = (e) => {
    const filter = e.target.value;
    setProducts(
      products.filter((item) => {
        return item.title.includes(filter);
      })
    );
    if (filter.length < 1) {
      productApi.loadAllProducts((result) => {
        setProducts(result);
      });
    }
  };
  return (
    <React.Fragment>
      <Alert showIcon {...alertObject} />
      <Card title="کالاها" type={"inner"} style={{ width: "100%" }}>
        <Row>
          <Col span={8}>
            <Toolbar
              create
              update
              remove
              read
              size={"large"}
              type={"circle"}
              onRemoveClick={handleRemoveProduct}
              onUpdateClick={handleUpdateProduct}
              onCreateClick={handleAddProduct}
            />
          </Col>
          <Col span={16}>
            <Input
              size="large"
              onChange={searchByTitle}
              placeholder="نام کالا جهت جستجو را وارد نمائید"
            />
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={24}>
            <Table
              onChange={onChange}
              columns={productColumns}
              rowSelection={{
                onChange: (selectedRowKeys, selectedRows) => {
                  setSelectedRowKeys(selectedRows);
                },
                type: "checkbox",
              }}
              rowKey={(record) => record._id}
              dataSource={products}
              pagination={{
                size: "medium",
                //current: currentPage,
                //onChange: (page) => setCurrentPage(page),
                defaultPageSize: 10,
                showSizeChanger: true,
                pageSizeOptions: ["10", "20", "30"],
              }}
            />
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={16}>
            <ProductEntry
              show={showPrdouctEntry}
              updateMode={updateMode}
              renderModel={updateMode === true ? selectedRowKeys[0] : null}
              onCancel={() => setShowProductEntry(false)}
              onUpdateComplete={handleCreationProduct}
              onCreateComplete={handleCreationProduct}
            />
          </Col>
        </Row>
      </Card>
    </React.Fragment>
  );
};

export default ProductsPage;
