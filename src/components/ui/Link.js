import PropTypes from 'prop-types';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';


const StyledLink = styled(RouterLink)`
    font-size: 12px;
    text-transform: uppercase;
    text-decoration: underline;
    color: #000000;
    
    &:hover,
    &:active,
    &:focus {
        color: #000000;
    }
`;

const CoreLink = ({ to, text }) => (
    <StyledLink to={ to }>{ text }</StyledLink>
);

CoreLink.propTypes = {
    to: PropTypes.string,
    text: PropTypes.string,
};

export default CoreLink;