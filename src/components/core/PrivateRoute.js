import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { ServiceProviderContext } from '@/services/serviceProvider';


const PrivateRoute = ({ children, ...rest }) => {
    const { userManager } = useContext(ServiceProviderContext);

    return <Route
        { ...rest }
        render={ () => userManager.isAuthenticated ? children : <Redirect to="/login"/> }
    />;
}

PrivateRoute.propTypes = {
    children: PropTypes.element,
};

export default PrivateRoute;