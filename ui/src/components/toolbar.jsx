import React from "react";
import {Button, Space, Tooltip} from "antd";
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
                        <Tooltip title={"اضافه کردن مورد جدید"}>
                            <Button type={"primary"}
                                    onClick={onCreateClick}
                                    shape={type}
                                    size={size}
                                    icon={<PlusCircleOutlined/>}/>

                        </Tooltip>
                    )
                }

            </Space>
        </div>
    )

}

export default Toolbar;