import React from "react";
import './content.css';
import {Content} from "antd/es/layout/layout";
import MainPageSlider from "./slider";

const MainPageContent = () => {
    return(
        <>
            <Content style={{padding: '0 50px'}}>
                <MainPageSlider />
                <div className="site-layout-content">Content</div>
            </Content>
        </>
    )
}

export default MainPageContent;