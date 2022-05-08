import {ConfigProvider, Layout, Menu} from "antd";

import faIR from 'antd/lib/locale/fa_IR';
import 'moment/locale/fa';
import moment from "moment";
import './App.css';
import {UserOutlined} from "@ant-design/icons";
import {Content, Header} from "antd/es/layout/layout";

const items = [
    {
        key: 1,
        label: 'فروشندگان کالا'
    },
    {
        key: 2,
        label: 'تامین کنندگان خدمات'
    },
    {
        key: 3,
        style:{float:"left"},
        label: 'فروشندگان کالا'
    },];

function App() {
    moment.locale('fa');
    return (
        <ConfigProvider locale={faIR} componentSize={"large"} direction={"rtl"}>
            <Layout style={{backgroundColor:"white"}}>
                <Header>
                    <div className="logo">
                        <UserOutlined size={128} />
                    </div>
                    <Menu

                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={items}
                    />
                </Header>
                <Content style={{padding: '0 50px'}}>

                    <div className="site-layout-content">Content</div>
                </Content>

            </Layout>
        </ConfigProvider>
    );
}

export default App;
