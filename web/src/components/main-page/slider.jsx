import React from "react";
import {Radio, Carousel} from "antd";

const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#9fb7f8',
}

const MainPageSlider = () => {
    return (
        <>

            <Carousel dotPosition={"bottom"} style={{borderRadius:"10px", marginTop:"15px"}}>
                <div>
                    <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                    <h3 style={contentStyle}>4</h3>
                </div>
            </Carousel>
        </>
    );

}

export default MainPageSlider;