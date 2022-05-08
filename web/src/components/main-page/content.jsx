import React from "react";
import './content.css';
import {Content} from "antd/es/layout/layout";

const MainPageContent = () => {
    return(
        <>
            <Content style={{padding: '0 50px'}}>

                <div className="site-layout-content">Content</div>
            </Content>
        </>
    )
}

export default MainPageContent;