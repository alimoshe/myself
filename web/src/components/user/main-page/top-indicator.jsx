import React from "react";
import {UserOutlined} from "@ant-design/icons";
import './top-indicator.css';
import {Dropdown, Menu, Space} from "antd";
const UserTopIndicator = () => {
    const menu = () => {
        return (
        <Menu
            items={[
                {
                    label: <a href="#">پروفایل کاربری</a>,
                    key: '0',
                },
                {
                    label: <a href="#">لیست علاقه مندی ها</a>,
                    key: '1',
                },
                {
                    type: 'divider',
                },
                {
                    label: 'خروج',
                    key: '3',
                },
            ]}
        />
        );
    }
    return (<>


            <a onClick={(e) => e.preventDefault()}>

                    <div className="logo">
                        <UserOutlined size={128} />
                    </div>


            </a>


    </>);
}

export default UserTopIndicator;