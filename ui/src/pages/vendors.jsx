import React, {useState} from "react";
import {Button, Card, Col, Divider, Modal, Row, Space, Table} from "antd";
import Toolbar from "../components/toolbar";
import CategorySelect from "../components/categorySelect";
import vendorsTableColumns from "../tables-columns/vendor-columns";

const VendorEntry = ({model, show, handleOk, handleCancel}) =>{
    return(
        <Modal width={"40%"}
               okButtonProps={{size:"large"}}
               cancelButtonProps={{size:"large"}}
               title="ورود اطلاعات تامین کننده"
               visible={show}
               onOk={handleOk}
               onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    )
}

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