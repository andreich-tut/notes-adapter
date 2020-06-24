import React, { useCallback, useContext, useEffect, useState } from 'react';
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
    const [ isLoading, setIsLoading ] = useState(false);
    const history = useHistory();

    const signOut = useCallback(() => {
        if (confirm('Are you sure you want to sign out from App?')) {
            serverManager.signOut();
            history.push('/');
        }
    }, [ history, serverManager ]);

    useEffect(() => {
        setUserName(userManager.email);
        setIsLoading(true);

        serverManager
            .fetchHistory()
            .then((messages) => {
                setMessages(messages);
                setIsLoading(false);
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                />
            </WithSpinner>
        </Container>
    );
};

export default Dashboard;