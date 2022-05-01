import React, {useEffect, useRef, useState} from "react";
import {
    Button,
    Card,
    Col,
    Divider,
    Form,
    Input,
    Modal,
    Row,
    Alert,
    Table, Result,
} from "antd";
import Toolbar from "../components/toolbar";
import vendorsTableColumns from "../tables-columns/vendor-columns";
import vendorApi from "../api/vendor";
import $ from "jquery";
import "./css/table.style.css";

const VendorEntry = ({
                         model,
                         show,
                         updateMode,
                         handleOk,
                         handleCancel,
                         handleUpdateVendor,
                         handleCreateVendor,
                     }) => {

    const onVendorCreate = (vendor) => {
        handleCreateVendor(vendor);
    };
    const onVendorUpdate = (newVendor, oldVendor) => {
        handleUpdateVendor(newVendor, oldVendor);
    };
    return (
        <Modal
            width={"40%"}
            okButtonProps={{size: "large", htmlType: "submit"}}
            cancelButtonProps={{size: "large"}}
            title="ورود اطلاعات تامین کننده"
            visible={show}
            footer={null}
            onOk={handleOk}
            destroyOnClose={true}
            onCancel={handleCancel}
        >

            <VendorEntModal onCreateNew={onVendorCreate}
                            onUpdate={onVendorUpdate}
                            dataModel={updateMode === true ? model : null}
                            updateMode={updateMode}/>
        </Modal>
    );
};

const VendorEntModal = ({onCreateNew, dataModel, updateMode, onUpdate}) => {

    const onFinish = (values) => {
        if (updateMode !== true) {
            onCreateNew(values);
        } else
            onUpdate(dataModel[0], values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };
    let renderModel = {};
    if (dataModel) {
        renderModel = {...dataModel[0]};
    }

    return (
        <>

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
                    label="عنوان تامین کننده"
                    name="title"

                    rules={[
                        {
                            required: true,
                            message: "عنوان الزامی است",
                        },
                    ]}
                >
                    <Input/>
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
                    <Input/>
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
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="آدرس وب سایت"
                    name="webSiteAddress"
                    rules={[
                        {
                            required: false,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="نام رابط تامین کننده"
                    name="agentFullName"
                    rules={[
                        {
                            required: false,
                            message: "Please input your username!",
                        },
                    ]}
                >
                    <Input/>
                </Form.Item>
                <Form.Item
                    label="کد تامین کننده در وب سایت"
                    name="code"
                    rules={[
                        {
                            required: true,
                            message: "کد شرکت الزامی است",
                        },
                    ]}
                >
                    <Input/>
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
                    <Input/>
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
        </>
    );

};

const Vendors = () => {
    const [showVendorEntry, setShowVendorEntry] = useState(false);
    const [alertObject, setAlertObject] = useState({
        style: {display: "none"},
    });
    const [showPopup, setShowPopup] = useState(false);
    const [selectedRowKeys, setSelectedRowKeys] = useState([]);
    const [editVendor, setEditVendor] = useState(false);
    const [vendors, setVendors] = useState([]);

    useEffect(() => {
        vendorApi.loadAllVendors((vendors) => {
            setVendors(vendors);
        });
    }, []);

    const selectionCheckCriteria = () => {
        if (selectedRowKeys.length < 1) {
            setAlertObject({
                style: {display: ""},
                type: "error",
                message: "لطفا یک سطر را انتخاب نمائید تا عملیات بر روی آن انجام شود",
            });
            return false;
        } else if (selectedRowKeys.length > 1) {
            setAlertObject({
                style: {display: ""},
                type: "warning",
                message: `این عملیات فقط نیاز به انتخاب یک سطر دارد`,
            });
            return false;
        }

        return true;
    }
    const handleCandidateToUpdate = (e) => {
        if (selectionCheckCriteria()) {
            setAlertObject({
                style: {display: "none"},
            });
            setShowVendorEntry(true);
            setEditVendor(true);
        }
    }

    const handleRemove = () => {
        if (selectionCheckCriteria()) {
            setAlertObject({
                style: {display: "none"},
            });
            vendorApi.removeVendor(selectedRowKeys, (result) => {
                if (result.err) {
                    setAlertObject({
                        style: {display: ""},
                        type: "error",
                        message: result.err.errMessage,
                    });
                    $(".ant-modal-close-x").click();
                } else {
                    setAlertObject({
                        style: {display: ""},
                        type: "success",
                        message: "تامین کننده حذف شد",
                    });
                    $(".ant-modal-close-x").click();
                }
            })
        }
    }

    const handleAddVendorClick = (e) => {
        setEditVendor(false);
        setShowVendorEntry(true);
    }

    const createVendor = (vendor) => {
        // Create new Vendor
        vendorApi.createVendor(vendor, (completionResult) => {
            if (completionResult.err) {
                setAlertObject({
                    style: {display: ""},
                    type: "error",
                    message: completionResult.err.errMessage,
                });
                $(".ant-modal-close-x").click();
            } else {
                setAlertObject({
                    style: {display: ""},
                    type: "success",
                    message: "تامین کننده ثبت شد",
                });
                $(".ant-modal-close-x").click();
            }
        });
    }

    const updateVendor = (oldVendor, newVendor) => {
        // Create new Vendor
        vendorApi.updateVendor(oldVendor, newVendor, (completionResult) => {
            console.log(completionResult);
            if (completionResult.err) {
                setAlertObject({
                    style: {display: ""},
                    type: "error",
                    message: completionResult.err.errMessage,
                });
                $(".ant-modal-close-x").click();
            } else {
                setAlertObject({
                    style: {display: ""},
                    type: "success",
                    message: "تامین کننده ثبت شد",
                });
                $(".ant-modal-close-x").click();
                vendorApi.loadAllVendors((vendors) => {
                    setVendors(vendors)
                });
            }
        });
    }
    return (
        <React.Fragment>
            <Alert showIcon {...alertObject} />
            <Card
                title="تامین گننده کالا و خدمات"
                type={"inner"}
                style={{width: "100%"}}
            >
                <Row>
                    <Col span={8}>
                        <Toolbar
                            create
                            update
                            remove
                            read
                            size={"large"}
                            type={"circle"}
                            onRefreshClick={() =>
                                vendorApi.loadAllVendors((vendors) => {
                                    setVendors(vendors)
                                })}
                            showRemovePopConfirm={showPopup}
                            onRemoveClick={handleRemove}
                            onUpdateClick={handleCandidateToUpdate}
                            onCreateClick={handleAddVendorClick}
                        />
                    </Col>
                    <Col span={16}>
                        {/* Reserved for future use */}
                    </Col>
                </Row>
                <Row>
                </Row>
                <Divider/>
                <Row>
                    <Col span={24}>
                        <Table
                            columns={vendorsTableColumns}
                            rowSelection={{
                                onChange: (selectedRowKeys, selectedRows) => {
                                    setSelectedRowKeys(selectedRows);

                                }, type: "checkbox"
                            }}

                            rowKey={(record) => record.code}
                            dataSource={vendors}
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
                <Row>
                    <Col span={12}>
                        <VendorEntry
                            show={showVendorEntry}
                            model={selectedRowKeys}
                            updateMode={editVendor}
                            handleCancel={() => setShowVendorEntry(false)}
                            handleCreateVendor={createVendor}
                            handleUpdateVendor={updateVendor}
                        />
                    </Col>
                </Row>
            </Card>
        </React.Fragment>
    );
};

export default Vendors;
