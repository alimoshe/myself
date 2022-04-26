import {Card, ConfigProvider, Layout, Menu} from "antd";

import faIR from 'antd/lib/locale/fa_IR';
import 'moment/locale/fa';
import moment from "moment";
import {Content, Header} from "antd/es/layout/layout";
import {useState} from "react";
import ComponentLoader from "./components/componentLoader";
import './App.css';


function App() {
    const [pageNumber, setPageNumber] = useState(1);

    const onMenuItemClick = (e) => {
        setPageNumber(+e.key);
    }

    moment.locale('fa');
    return (
        <ConfigProvider direction={"rtl"} locale={faIR} componentSize={"small"}>
            <div>
                <Layout className="layout">
                    <Header>
                        <div className="logo"/>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            items={
                                [
                                    {
                                        key: 1,
                                        label: 'محصولات' ,
                                        onClick : onMenuItemClick
                                    },
                                    {
                                        key: 2,
                                        label: 'گالری تصاویر',
                                        onClick : onMenuItemClick
                                    },

                                ]
                            }
                        />
                    </Header>
                    <Content style={{padding: '10px 10px 10px 10px', fontFamily:'Tahoma'}}>
                        <ComponentLoader sectionId={pageNumber} />
                    </Content>

                </Layout>
            </div>
        </ConfigProvider>
    );
}

export default App;
