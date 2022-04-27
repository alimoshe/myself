import React from "react";
import {Pagination} from "antd";

const MyPagination = ({onPageChanged}) => {
    return(
        <React.Fragment>
            <Pagination defaultCurrent={1}
                        onChange={onPageChanged}
                        total={500} />
        </React.Fragment>
    )
}

export default MyPagination;