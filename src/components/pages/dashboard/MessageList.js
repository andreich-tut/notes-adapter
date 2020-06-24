import PropTypes from 'prop-types';
import React, { useCallback, useContext } from 'react';
import styled, { css } from 'styled-components';
import { ServiceProviderContext } from '@/services/serviceProvider';
import Message from './Message';
import MessageListEmpty from './MessageListEmpty';


const Section = styled.section`    
    margin-top: 25px;
    
    ${ ({ isListView }) => !isListView && css`
        width: 100%;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    ` }
`;

const MessageList = ({ data = [], isListView }) => {
    const { toolManager } = useContext(ServiceProviderContext);

    const getMessageText = useCallback((message) => {
        return message.attachments && message.attachments[0].link.title
            ? message.attachments[0].link.title : message.text;
    }, []);

    const getMessageImageUrl = useCallback((message) => {
        return message.attachments && message.attachments[0].link.photo
            ? message.attachments[0].link.photo.sizes[0].url : false;
    }, []);

    return (
        <Section isListView={ isListView }>
            {
                data.length ? data.map((message) => (
                    <Message
                        key={ `msg_${ message.id }` }
                        date={ toolManager.parseUnixDate(message.date) }
                        text={ getMessageText(message) }
                        imageUrl={ getMessageImageUrl(message) }
                        isListItem={ isListView }
                    />
                )) : <MessageListEmpty/>
            }
        </Section>
    )
};

MessageList.propTypes = {
    data: PropTypes.array,
    isListView: PropTypes.bool,
};

export default MessageList;
