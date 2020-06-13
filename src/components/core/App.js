import React from 'react'
import styled from 'styled-components';
import AppGlobalStyle from '@/components/ui/AppGlobalStyles';
import AuthRoute from '@/components/core/AuthRoute';
import PrivateRoute from '@/components/core/PrivateRoute';
import Dashboard from '@/components/pages/dashboard/Dashboard';
import Login from '@/components/pages/Login';
import SignIn from '@/components/pages/SignIn';
import SignUp from '@/components/pages/SignUp';


const AppContainer = styled.div`
    height: 100%;
    min-height: 100vh;
`;

const App = () => (
    <>
        <AppGlobalStyle/>
        <AppContainer>
            <PrivateRoute path="/">
                <Dashboard/>
            </PrivateRoute>

            <AuthRoute path="/login">
                <Login/>
            </AuthRoute>

            <AuthRoute path="/sign-up">
                <SignUp/>
            </AuthRoute>

            <AuthRoute path="/sign-in">
                <SignIn/>
            </AuthRoute>
        </AppContainer>
    </>
);

export default App;