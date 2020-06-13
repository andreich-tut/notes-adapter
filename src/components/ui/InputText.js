import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';


const Input = styled.input`
    display: block;
    height: auto;
    width: 180px;
    padding: 8px 10px;
    margin: 0;
    font-size: 12px;
    font-family: inherit;
    border: 1px solid #000000;
    cursor: text;
    
    &:focus {
        outline-style: groove;
    }
`;

const InputText = ({ id, name, placeholder, isPassword, handler }) => (
    <Input
        id={ id }
        name={ name ? name : id }
        placeholder={ placeholder ? placeholder : id }
        type={ isPassword ? 'password' : 'text' }
        onChange={ (e) => handler(e) }
        required
    />
);

InputText.propTypes = {
    handler: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    isPassword: PropTypes.bool,
};

export default InputText;