import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { ServiceProviderContext } from '@/services/serviceProvider';
import Button from '@/components/ui/Button';
import DashboardHeader from './DashboardHeader';
import DashboardContent from './DashboardContent';
import WithSpinner from '@/components/ui/WithSpinner';


const Container = styled.section`
    margin: 20px 30px
`;

const Dashboard = () => {

    const { serverManager, userManager } = useContext(ServiceProviderContext);

    const [ userName, setUserName ] = useState(null);

    const [ messages, setMessages ] = useState([]);

    const [ totalMessagesCount, setTotalMessagesCount ] = useState(0);

    const [ isLoading, setIsLoading ] = useState(false);

    const history = useHistory();

    const signOut = () => {
        if (confirm('Are you sure you want to sign out from App?')) {
            serverManager.signOut();
            history.push('/');
        }
    };

    useEffect(() => {
        setUserName(userManager.email)
        setIsLoading(true);
        serverManager
            .fetchHistory()
            .then((messages) => {
                setTotalMessagesCount(messages.length);
                setMessages(messages);
                setIsLoading(false);
            });
    }, []);

    return (
        <Container>
            <DashboardHeader userName={ userName }>
                <Button
                    text="Sign in VK"
                    handler={ () => alert('Work in progress') }
                />

                <Button
                    text="Sign Out"
                    handler={ signOut }
                />
            </DashboardHeader>

            <WithSpinner>
                <DashboardContent
                    isLoading={ isLoading }
                    messages={ messages }
                    totalMessagesCount={ totalMessagesCount }
                />
            </WithSpinner>
        </Container>
    );
};

export default Dashboard;