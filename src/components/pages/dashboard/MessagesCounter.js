import PropTypes from 'prop-types';
import React from 'react';


const MessagesCounter = ({ result, total }) => (
    <span>Messages: { result ? result : 0 }/{ total ? total : 0 }</span>
);

MessagesCounter.propTypes = {
    result: PropTypes.number,
    total: PropTypes.number,
};

export default MessagesCounter;
