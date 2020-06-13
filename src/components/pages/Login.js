import React from 'react';
import styled from 'styled-components';
import DelimiterLine from '../ui/DelimiterLine';
import Link from '../ui/Link';
import { Redirect } from 'react-router';


const Container = styled.nav`
    padding: 20px 30px;
`;

const Login = ({ isAuthenticated }) => isAuthenticated
    ? <Redirect to="/" exact/>
    : <Container>
        <Link to="/sign-up" text="Sign up"/>
        <DelimiterLine/>
        <Link to="/sign-in" text="Sign in"/>
    </Container>;

export default Login;