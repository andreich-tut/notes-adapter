import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import ButtonToggle from '@/components/ui/ButtonToggle';
import Checkbox from '@/components/ui/Checkbox';
import Dropdown from '@/components/ui/Dropdown';
import MessageList from './MessageList';
import MessageListController from './MessageListController';
import withPagination from '@/components/ui/pagination/withPagination';


const DashboardContent = ({ messages }) => {
    const [ isListView, setIsListView ] = useState(true);

    const toggleListView = (isList) => setIsListView(isList);

    const toggleSort = useCallback(() => console.log('toggle sort'), []);

    const MessageListWithPagination = withPagination(MessageList);

    return (
        <>
            <MessageListController>
                <ButtonToggle
                    handler={ toggleListView }
                    firstStateTitle="List"
                    secondStateTitle="Grid"
                />

                <ButtonToggle
                    handler={ toggleSort }
                    firstStateTitle="ASC"
                    secondStateTitle="DESC"
                />

                <Dropdown title="Filter">
                    <Checkbox
                        title="has image"
                        handler={ () => console.log('has image') }
                    />

                    <Checkbox
                        title="has url"
                        handler={ () => console.log('has url') }
                    />

                    <Checkbox
                        title="has hashtag"
                        handler={ () => console.log('has hashtag') }
                    />
                </Dropdown>
            </MessageListController>

            <MessageListWithPagination
                data={ messages }
                isListView={ isListView }
                itemsLimit={ 10 }
                pagesMarginTop={ 20 }
            />
        </>
    );
};

DashboardContent.propTypes = {
    messages: PropTypes.arrayOf(PropTypes.shape({
        attachments: PropTypes.arrayOf(PropTypes.shape({
            link: PropTypes.shape({
                caption: PropTypes.string,
                description: PropTypes.string,
                isFavorite: PropTypes.bool,
                photo: PropTypes.shape({
                    sizes: PropTypes.arrayOf(PropTypes.shape({
                        height: PropTypes.number,
                        url: PropTypes.string,
                        width: PropTypes.number,
                    })),
                }),
                title: PropTypes.string,
                url: PropTypes.string,
            }),
            type: PropTypes.string,
        })),
        date: PropTypes.number,
        id: PropTypes.number,
        text: PropTypes.string,
    })),
};

export default DashboardContent;