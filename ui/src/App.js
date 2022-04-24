import {Breadcrumb, ConfigProvider, Layout, Menu} from "antd";
import './App.css';
import faIR from 'antd/lib/locale/fa_IR';
import 'moment/locale/fa';
import moment from "moment";
import {Content, Footer, Header} from "antd/es/layout/layout";


function App() {
    moment.locale('fa');
    return (
        <ConfigProvider direction={"rtl"} locale={faIR} componentSize={"large"}>
            <div>


                <Layout className="layout">
                    <Header>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['2']}
                            items={[{key: 1, label:'test1'},{key:2,label:'محصولات و خدمات'}]}
                        />
                    </Header>
                    <Content style={{ padding: '0 50px' }}>

                    </Content>

                </Layout>
            </div>
        </ConfigProvider>
    );
}

export default App;
