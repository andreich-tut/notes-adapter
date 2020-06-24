import React, { useCallback, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { ServiceProviderContext } from '@/services/serviceProvider';


const Button = styled.button`
    background: white;
    border: 1px solid #b1b1b1;
    color: #b1b1b1;
    width: 30px;
    height: 30px;
    cursor: pointer;
    
    &:hover {
        border-color: #000000;
        color: #000000;
    }
    
    &:focus {
        outline: none;
    }
    
    &:not(:last-child) {
        margin-right: 20px;
    }
    
    ${ ({ isActive = false }) => isActive && css`
        color: #000000; 
        border-color: #000000;
    ` }
`;

const withPagination = (WrappedComponent) => {
    const Pagination = ({ data = [], itemsCount = 10, marginTop = 30, ...rest }) => {
        const { toolManager } = useContext(ServiceProviderContext);
        const [ currentPage, setCurrentPage ] = useState(1);
        const [ list, setList ] = useState(data.slice(0, itemsCount));
        const [ range, setRange ] = useState([ 1, 10 ]);

        const setPage = (page) => {
            const dataFrom = (page - 1) * itemsCount;
            const dataTo = dataFrom + itemsCount;

            setCurrentPage(page);
            setList(data.slice(dataFrom, dataTo));
            setRange([ dataFrom + 1, dataTo ]);
        };

        const getPagesRange = useCallback(
            () => toolManager.range(1, Math.ceil(data.length / itemsCount)),
            [ toolManager, data, itemsCount ]
        );

        return (
            <>
                <span>{ range[0] }-{ range[1] } of { data.length }</span>

                <WrappedComponent data={ list } { ...rest }/>

                <section style={ { marginTop } }>
                    {
                        getPagesRange().map((page) => (
                            <Button
                                key={ page }
                                isActive={ page === currentPage }
                                onClick={ () => setPage(page) }>
                                { page }
                            </Button>
                        ))
                    }
                </section>
            </>
        );
    };

    Pagination.propTypes = {
        data: PropTypes.array,
        itemsCount: PropTypes.number,
        marginTop: PropTypes.number,
    };

    return Pagination;
}

export default withPagination;