import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ServiceProviderContext } from '@/services/serviceProvider';


const AuthRoute = ({ children, ...rest }) => {
    const { userManager } = useContext(ServiceProviderContext);

    return <Route
        { ...rest }
        render={ () => userManager.isAuthenticated ? <Redirect to="/"/> : children }
    />;
};

AuthRoute.propTypes = {
    children: PropTypes.element,
};

export default AuthRoute;