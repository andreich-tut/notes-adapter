import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
    margin: 0;
    padding: 8px 12px;
    font-size: 12px;
    font-family: inherit;
    line-height: 1;
    text-transform: uppercase;
    background: none;
    border: 1px solid #000000;
    cursor: pointer;
    
    &:hover {
        text-decoration: underline;
    }
    
    &:focus {
        outline: none;
    }
`;

const ButtonBordered = ({ children, handler, text }) => (
    <StyledButton onClick={ (e) => handler && handler(e) }>
        { text ? text : children }
    </StyledButton>
);

ButtonBordered.propTypes = {
    children: PropTypes.any,
    handler: PropTypes.func,
    text: PropTypes.string,
};

export default ButtonBordered;