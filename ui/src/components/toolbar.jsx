import React from "react";
import {Button, Popconfirm, Space, Tooltip} from "antd";
import {DeleteOutlined, EditOutlined, PlusCircleOutlined, SearchOutlined} from "@ant-design/icons";

const Toolbar = ({
                     create,
                     read,
                     update,
                     sort,
                     size,
                     remove,
                     type,
                     onCreateClick,
                     onUpdateClick,
                     onRefreshClick,
                     onRemoveClick,
                     onRemoveConfirm,
                     showRemovePopConfirm
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
                    update && (
                        <Tooltip title={"ویرایش اطلاعات"}>
                            <Button type={"primary"}
                                    onClick={onUpdateClick}
                                    shape={type}
                                    size={size}
                                    icon={<EditOutlined/>}/>

                        </Tooltip>

                    )
                }
                {
                    remove && (
                        <Popconfirm
                            title="آیا از حذف مورد انتخاب شده مطمئن هستید ؟"
                            onConfirm={onRemoveConfirm}
                            visible={showRemovePopConfirm}
                            okText="بله"
                            cancelText="خیر"
                        >
                            <Tooltip title={"حذف اطلاعات"}>
                                <Button type={"primary"}
                                        onClick={onRemoveClick}
                                        shape={type}
                                        size={size}
                                        icon={<DeleteOutlined/>}/>

                            </Tooltip>
                        </Popconfirm>

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