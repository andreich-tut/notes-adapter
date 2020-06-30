import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ServiceProviderContext } from '@/services/serviceProvider';
import PageButton from '@/components/ui/pagination/PageButton';


const withPagination = (WrappedComponent) => {
    const Pagination = ({ data = [], itemsLimit = 10, pagesMarginTop = 30, ...rest }) => {
        const FIRST_PAGE = 1;
        const PAGE_TAIL_MAX_LENGTH = 4;
        const PAGES_DELIMITER = '...';
        const PAGES_LIMIT = 6;

        const { toolManager } = useContext(ServiceProviderContext);

        const pagesRangeLimit = Math.ceil(data.length / itemsLimit);
        const pagesRange = toolManager.range(1, pagesRangeLimit);
        const pagesNeighboursCount = (PAGES_LIMIT - 4) / 2;

        const [ currentPage, setCurrentPage ] = useState(1);
        const [ list, setList ] = useState(data.slice(0, itemsLimit));
        const [ range, setRange ] = useState([ FIRST_PAGE, itemsLimit ]);

        const setPage = (page) => {
            if (typeof page === 'number') {
                const dataFrom = (page - 1) * itemsLimit;
                const dataTo = dataFrom + itemsLimit;

                setCurrentPage(page);
                setList(data.slice(dataFrom, dataTo));
                setRange([ dataFrom + 1, dataTo ]);
            }
        };

        const setPrevPage = () => currentPage - 1 > 0 && setPage(currentPage - 1);

        const setNextPage = () => currentPage + 1 <= pagesRangeLimit && setPage(currentPage + 1);

        const getPagesRange = (page) => {
            if (pagesRangeLimit > PAGES_LIMIT) {
                const isIncludesStart = page <= PAGE_TAIL_MAX_LENGTH;
                const isIncludesEnd = page > pagesRangeLimit - PAGE_TAIL_MAX_LENGTH;

                if (isIncludesStart) {
                    return [
                        ...pagesRange.slice(0, PAGES_LIMIT - 1),
                        PAGES_DELIMITER,
                        pagesRangeLimit,
                    ];
                }

                if (isIncludesEnd) {
                    return [
                        FIRST_PAGE,
                        PAGES_DELIMITER,
                        ...pagesRange.slice(
                            pagesRangeLimit - PAGES_LIMIT + 1,
                            pagesRangeLimit + 1,
                        ),
                    ];
                }

                if (!isIncludesEnd && !isIncludesStart) {
                    return [
                        FIRST_PAGE,
                        PAGES_DELIMITER,
                        ...pagesRange.slice(
                            page - pagesNeighboursCount - 1,
                            page + pagesNeighboursCount,
                        ),
                        PAGES_DELIMITER,
                        pagesRangeLimit,
                    ];
                }
            }

            return pagesRange;
        };

        return (<>
            <span>{ range[0] }-{ range[1] } of { data.length }</span>

            <WrappedComponent data={ list } { ...rest }/>

            <section style={ { marginTop: pagesMarginTop } }>
                <PageButton onClick={ () => setPrevPage() }>{ '<<' }</PageButton>
                {
                    getPagesRange(currentPage).map((page, i) => (
                        <PageButton
                            key={ `${ page } + ${ i }` }
                            isActive={ page === currentPage }
                            isDelimiter={ page === PAGES_DELIMITER }
                            onClick={ () => setPage(page) }>
                            { page }
                        </PageButton>
                    ))
                }
                <PageButton onClick={ () => setNextPage() }>{ '>>' }</PageButton>
            </section>
        </>);
    };

    Pagination.propTypes = {
        data: PropTypes.array,
        itemsLimit: PropTypes.number,
        pagesMarginTop: PropTypes.number,
    };

    return Pagination;
}

export default withPagination;