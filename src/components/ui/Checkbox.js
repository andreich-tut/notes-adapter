import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';


const Label = styled.label`
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    cursor: pointer;
`;

const Box = styled.div`
    width: 12px;
    height: 12px;
    border: 1px solid #000000;
    
    svg {
        display: none;
        position: absolute;
        top: 1px;
        left: 3px;
    }
`;

const Input = styled.input`
    &:checked ~ ${ Box } svg {
        display: block;
    }
`;

const Title = styled.span`
    margin-left: 12px;
    white-space: nowrap;
`;

const Checkbox = ({ title, handler }) => (
    <Label>
        <Input
            type="checkbox"
            onClick={ () => handler && handler() }
            hidden
        />

        <Box>
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                <path
                    d="M11.5962 0.667206L3.59622 8.66721M0.596191 4.9601L3.59619 7.9601"
                    stroke="black"
                />
            </svg>
        </Box>

        <Title>{ title }</Title>
    </Label>
);

Checkbox.propTypes = {
    title: PropTypes.string,
    handler: PropTypes.func,
};

export default Checkbox;