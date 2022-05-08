import React from "react";
import {Header} from "antd/es/layout/layout";
import {Menu} from "antd";
import {
    DropboxOutlined,
    UserSwitchOutlined,
    SettingOutlined,
    ExpandOutlined,
    PhoneOutlined,
    EnvironmentOutlined
} from "@ant-design/icons";
import UserTopIndicator from "../user/main-page/top-indicator";

const items = [
    {
        key: 1,
        label: 'فروشندگان کالا',
        icon: <DropboxOutlined/>
    },
    {
        key: 2,
        icon: <SettingOutlined/>,
        label: 'تامین کنندگان خدمات'
    },
    {
        key: 3,
        icon: <UserSwitchOutlined/>,
        label: 'باشگاه مشتریان'
    },
    {
        key: 4,
        icon: <ExpandOutlined/>,
        label: 'پنل فروشندگان'
    },
    {
        key: 5,
        icon: <ExpandOutlined/>,
        label: 'پنل تامین کنندگان خدمات'
    },
    {
        key: 6,
        icon: <EnvironmentOutlined/>,
        label: 'درباره ما'
    },
    {
        key: 7,
        icon: <PhoneOutlined/>,
        label: 'تماس با پشتیبانی'
    },];
const MainPageHeader = () => {
    return (<>
        <Header>
            <UserTopIndicator/>
            <Menu
                mode="horizontal"
                defaultSelectedKeys={['2']}
                items={items}
            />

        </Header>
    </>);
}

export default MainPageHeader;