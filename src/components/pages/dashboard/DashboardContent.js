import React, { useCallback, useState } from 'react';
import ButtonToggle from '@/components/ui/ButtonToggle';
import Checkbox from '@/components/ui/Checkbox';
import Dropdown from '@/components/ui/Dropdown';
import MessageList from './MessageList';
import MessageListController from './MessageListController';
import MessagesCounter from './MessagesCounter';


const DashboardContent = ({ messages, totalMessagesCount }) => {

    const [ isListView, setIsListView ] = useState(true);

    const toggleListView = (isList) => setIsListView(isList);

    const toggleSort = useCallback(() => console.log('toggle sort'), []);

    return <>
        <MessagesCounter
            total={ totalMessagesCount }
            result={ messages.length }
        />

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

        <MessageList
            isListView={ isListView }
            messages={ messages }
        />
    </>;
};

export default DashboardContent;