import React from "react";
import {Button, Space} from "antd";
import {PlusCircleOutlined} from "@ant-design/icons";

const Toolbar = ({
                     create,
                     read,
                     update,
                     remove,
                     sort,
                     size,
                     type,
                     onCreateClick
                 }) => {
    return (
        <div>
            <Space>
                {
                    create && (
                        <Button type={"primary"} onClick={onCreateClick}
                                    shape={type} size={size}
                                    icon={<PlusCircleOutlined/>}/>
                              )
                }
            </Space>
        </div>
    )
}

export default Toolbar;