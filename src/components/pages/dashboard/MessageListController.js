import React from 'react';
import styled from 'styled-components';


export default styled.section`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 25px 0;
    
    & > *:not(:last-child) {
        margin-right: 20px;
    }
`;