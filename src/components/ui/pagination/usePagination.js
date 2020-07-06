import React, { useContext } from 'react';
import { ServiceProviderContext } from '@/services/serviceProvider';


const usePagination = (page, pagesLimit, items, itemsLimit) => {
    const FIRST_PAGE = 1;
    const PAGES_DELIMITER = '...';

    const { toolManager } = useContext(ServiceProviderContext);

    const pagesRangeLimit = Math.ceil(items.length / itemsLimit);
    const pagesNeighboursCount = (pagesLimit - 4) / 2;
    const pageTailLength = pagesLimit - 2;

    const itemsFrom = itemsLimit * (page - 1);
    const itemsTo = itemsFrom + itemsLimit;

    const buildPagesRange = () => {
        const baseRange = toolManager.range(1, pagesRangeLimit);
        let result = [];

        if (pagesRangeLimit > pagesLimit) {
            const isIncludesStart = page <= pageTailLength;
            const isIncludesEnd = page > pagesRangeLimit - pageTailLength;

            if (isIncludesStart) {
                result = [
                    ...baseRange.slice(0, pagesLimit - 1),
                    PAGES_DELIMITER,
                    pagesRangeLimit,
                ];
            }

            if (isIncludesEnd) {
                result = [
                    FIRST_PAGE,
                    PAGES_DELIMITER,
                    ...baseRange.slice(
                        pagesRangeLimit - pagesLimit + 1,
                        pagesRangeLimit + 1,
                    ),
                ];
            }

            if (!isIncludesEnd && !isIncludesStart) {
                result = [
                    FIRST_PAGE,
                    PAGES_DELIMITER,
                    ...baseRange.slice(
                        page - pagesNeighboursCount - 1,
                        page + pagesNeighboursCount,
                    ),
                    PAGES_DELIMITER,
                    pagesRangeLimit,
                ];
            }
        }

        return result.map((page) => ({
            value: page,
            isDelimiter: page === PAGES_DELIMITER,
        }));
    };

    return {
        from: itemsFrom,
        to: itemsTo,
        list: items.slice(itemsFrom, itemsTo),
        pages: buildPagesRange(),
    };
};

export default usePagination;