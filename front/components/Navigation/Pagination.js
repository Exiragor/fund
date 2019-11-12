import React from 'react';
import cn from 'classnames';

const generatePages = (currentPage, lastPage) => {
    let page = currentPage === 1 ? currentPage + 1 : currentPage;
    page = page === lastPage ? page - 1 : page;

    let pages = [];

    for (let i = page - 1 || 1; i <= page + 1; i++) {
        if (i > lastPage)
            break;
        pages.push(i);
    }

    return pages;
}

const Pagination = ({ currentPage, total, count, changePage }) => {
    const lastPage = Math.ceil(total / count);
    const previousPage = cn('page-numbers', { 'disabled': currentPage <= 1 });
    const nextPage = cn('page-numbers', { 'disabled': currentPage >= lastPage });
    const commonPage = page => cn('page-numbers', { 'current': page === currentPage });

    return (
        <nav>
            <div className="navigation">
                <span className={previousPage} onClick={() => changePage(currentPage - 1)}>
                   Предыдущая
                </span>
                { currentPage - 1 > 1 &&
                <span className="page-numbers" onClick={() => changePage(1)}>
                    1
                </span>
                }
                { currentPage - 2 > 1 &&
                <span className="page-numbers disabled">
                   ...
                </span>
                }
                {generatePages(currentPage, lastPage).map(page =>
                    <span className={commonPage(page)} key={page} onClick={() => changePage(page)}>
                        { page }
                    </span>
                )}
                { currentPage + 2 < lastPage &&
                <span className="page-numbers disabled">
                    ...
                </span>
                }
                { currentPage + 1 < lastPage &&
                <span className="page-numbers" onClick={() => changePage(lastPage)}>
                    { lastPage }
                </span>
                }
                <span className={nextPage} onClick={() => changePage(currentPage + 1)}>
                   Следующая
                </span>
            </div>
        </nav>
    )
};

export default Pagination;