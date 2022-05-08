import {ConfigProvider, Layout, Menu} from "antd";

import faIR from 'antd/lib/locale/fa_IR';
import 'moment/locale/fa';
import moment from "moment";
import './App.css';
import {Content} from "antd/es/layout/layout";
import MainPageHeader from "./components/main-page/header";



function App() {
    moment.locale('fa');
    return (
        <ConfigProvider locale={faIR} componentSize={"large"} direction={"rtl"}>
            <Layout style={{backgroundColor:"white"}}>
                <MainPageHeader />
                <Content style={{padding: '0 50px'}}>

                    <div className="site-layout-content">Content</div>
                </Content>

            </Layout>
        </ConfigProvider>
    );
}

export default App;
