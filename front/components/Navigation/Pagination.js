import React from 'react';
import { Pagination } from 'antd';

const PaginationComponent = ({ currentPage, total, count, changePage }) => {
    return (
        <Pagination current={currentPage} total={total} pageSize={count} onChange={changePage} />
    )
};

export default PaginationComponent;
