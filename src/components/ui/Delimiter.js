import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Span = styled.span`
    font-size: 12px;
    margin: 0 10px;
`;

const Delimiter = ({ char }) => <Span>{ char }</Span>;

Delimiter.propTypes = {
    char: PropTypes.string,
};

export default Delimiter