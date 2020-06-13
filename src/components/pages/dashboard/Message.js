import PropTypes from 'prop-types';
import React from 'react';
import MessageContainer from '@/components/pages/dashboard/MessageContainer';
import MessageImageContainer from '@/components/pages/dashboard/MessageImageContainer';


const imagePlaceholderUrl = 'https://via.placeholder.com/350x150.jpg?text=Card+image';

const Message = ({ date, text, imageUrl, isListItem }) => (
    <MessageContainer isListItem={ isListItem }>
        {
            !isListItem && (
                <MessageImageContainer>
                    <img src={ imageUrl ? imageUrl : imagePlaceholderUrl }/>
                </MessageImageContainer>
            )
        }
        <span>{ date }</span>
        <a href={ text }>{ text }</a>
    </MessageContainer>
);

Message.propTypes = {
    date: PropTypes.string,
    text: PropTypes.string,
    imageUrl: PropTypes.any,
    isListItem: PropTypes.bool,
};

export default Message;