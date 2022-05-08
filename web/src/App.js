import {ConfigProvider, Layout, Menu} from "antd";

import faIR from 'antd/lib/locale/fa_IR';
import 'moment/locale/fa';
import moment from "moment";
import './App.css';
import MainPageHeader from "./components/main-page/header";
import MainPageContent from "./components/main-page/content";



function App() {
    moment.locale('fa');
    return (
        <ConfigProvider locale={faIR} componentSize={"large"} direction={"rtl"}>
            <Layout style={{backgroundColor:"white"}}>
                <MainPageHeader />
                <MainPageContent />
            </Layout>
        </ConfigProvider>
    );
}

export default App;
