import React from 'react';
import styled, { css } from 'styled-components';


const PageButton = styled.button`
    background: white;
    border: 1px solid #b1b1b1;
    color: #b1b1b1;
    width: 30px;
    height: 30px;
    padding: 0;
    cursor: pointer;
    
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
    
    ${ ({ isDelimiter }) => !isDelimiter && css`
        &:hover {
            border-color: #000000;
            color: #000000;
        }
    ` }
`;

export default PageButton;