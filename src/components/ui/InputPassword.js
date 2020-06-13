import PropTypes from 'prop-types';
import React from 'react';
import InputText from './InputText';


const InputPassword = ({ id, name, placeholder, handler }) => (
    <InputText
        id={ id }
        name={ name ? name : id }
        placeholder={ placeholder ? placeholder : id }
        handler={ handler }
        isPassword={ true }
        required
    />
);

InputPassword.propTypes = {
    handler: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    placeholder: PropTypes.string,
};

export default InputPassword;