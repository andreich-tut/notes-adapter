import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import ButtonBordered from './ButtonBordered';


const Span = styled.span`
    color: #929292;
    
    ${ ({ isToggled }) => isToggled && css`
        color: #000000;
    ` }
`;

const ButtonToggle = ({ handler, firstStateTitle, secondStateTitle }) => {
    const [ isToggled, setIsToggle ] = useState(true);

    const toggleState = () => {
        setIsToggle(!isToggled);
        handler(!isToggled);
    };

    return (
        <ButtonBordered handler={ toggleState }>
            <Span isToggled={ isToggled }>{ firstStateTitle }</Span>
            <span> / </span>
            <Span isToggled={ !isToggled }>{ secondStateTitle }</Span>
        </ButtonBordered>
    );
};

ButtonToggle.propTypes = {
    handler: PropTypes.func,
    firstStateTitle: PropTypes.string,
    secondStateTitle: PropTypes.string,
};

export default ButtonToggle;