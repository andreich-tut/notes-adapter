import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
    margin: 0;
    padding: 0;
    font-size: 12px;
    font-family: inherit;
    text-transform: uppercase;
    text-decoration: underline;
    background: none;
    border: none;
    cursor: pointer;
`;

const Button = ({ text, handler }) => (
    <StyledButton
        type="submit"
        onClick={ (e) => handler(e) }
    >{ text }</StyledButton>
);

Button.propTypes = {
    text: PropTypes.string,
    handler: PropTypes.func,
};

export default Button;