import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Delimiter from '../ui/Delimiter';
import Link from '../ui/Link';
import { Redirect } from 'react-router';


const Container = styled.nav`
    padding: 20px 30px;
`;

const Login = ({ isAuthenticated }) => isAuthenticated
    ? <Redirect to="/" exact/>
    : (
        <Container>
            <Link to="/sign-up" text="Sign up"/>
            <Delimiter char="/"/>
            <Link to="/sign-in" text="Sign in"/>
        </Container>
    );

Login.propTypes = {
    isAuthenticated: PropTypes.bool,
};

export default Login;