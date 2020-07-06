import React, { Children, cloneElement, isValidElement, useState } from 'react';
import PropTypes from 'prop-types';
import PageButton from '@/components/ui/pagination/PageButton';
import usePagination from '@/components/ui/pagination/usePagination';


const WithPagination = ({ children, data = [], dataLimit = 10, pagesLimit = 6, pagesMarginTop = 30 }) => {
    const [ currentPage, setCurrentPage ] = useState(1);
    const pagesRangeLimit = Math.ceil(data.length / dataLimit);
    const pagination = usePagination(currentPage, pagesLimit, data, dataLimit);

    const setPage = (page) => {
        if (typeof page === 'number') setCurrentPage(page);
    };

    const setPrevPage = () => currentPage > 1 && setPage(currentPage - 1);

    const setNextPage = () => currentPage < pagesRangeLimit && setPage(currentPage + 1);

    return (<>
        <span>{ pagination.from }-{ pagination.to } of { data.length }</span>

        { Children.map(children, (child) => {
            if (isValidElement(child)) {
                return cloneElement(children, { data: pagination.list });
            }
        }) }

        <section style={ { marginTop: pagesMarginTop } }>
            <PageButton onClick={ () => setPrevPage() }>{ '<<' }</PageButton>

            { pagination.pages.map((page, i) => (
                <PageButton
                    key={ `${ page.value } + ${ i }` }
                    isActive={ page.value === currentPage }
                    isDelimiter={ page.isDelimiter }
                    onClick={ () => setPage(page.value) }>
                    { page.value }
                </PageButton>
            )) }

            <PageButton onClick={ () => setNextPage() }>{ '>>' }</PageButton>
        </section>
    </>);
};

WithPagination.propTypes = {
    children: PropTypes.element.isRequired,
    data: PropTypes.array,
    dataLimit: PropTypes.number,
    pagesLimit: PropTypes.number,
    pagesMarginTop: PropTypes.number,
};

export default WithPagination;