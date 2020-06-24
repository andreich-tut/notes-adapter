import React from 'react';
import styled, { css } from 'styled-components';


const MessageContainer = styled.article`
    display: block;
    margin-bottom: 15px;
    
    span {
        margin-right: 25px;
    }
    
    ${ ({ isListItem = false }) => !isListItem && css`
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        width: calc((100% - (20px * 3)) / 4);
        flex: 0 0 calc((100% - (20px * 3)) / 4);
        margin-right: 20px;
        border: 1px solid #000000;
        word-break: break-all;
        box-sizing: border-box;
        
        &:nth-child(4n) {
            margin-right: 0;
        }
        
        span {
            margin: 0;
            padding: 15px 12px
        }
        
        a {
            padding: 15px 12px;
        }
    ` }
`;

export default MessageContainer;