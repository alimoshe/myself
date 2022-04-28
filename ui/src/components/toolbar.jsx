import React from "react";
import {Button, Space, Tooltip} from "antd";
import {PlusCircleOutlined, SearchOutlined} from "@ant-design/icons";

const Toolbar = ({
                     create,
                     read,
                     sort,
                     size,
                     type,
                     onCreateClick,
                     onRefreshClick
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
                {
                    read && (
                        <Tooltip title={"بازخوانی"}>
                            <Button type={"primary"}
                                    onClick={onRefreshClick}
                                    shape={type}
                                    size={size}
                                    icon={<SearchOutlined/>}/>

                        </Tooltip>

                    )
                }
            </Space>
        </div>
    )

}

export default Toolbar;