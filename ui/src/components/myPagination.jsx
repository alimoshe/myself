import React from "react";
import {Pagination} from "antd";

const MyPagination = ({onPageChanged, total, pageCount}) => {
    return(
        <React.Fragment>
            <Pagination defaultCurrent={1}
                        onChange={onPageChanged}
                        total={total}
                        size={"default"}

            />

        </React.Fragment>
    )
}

export default MyPagination;