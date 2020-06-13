import PropTypes from 'prop-types';
import React from 'react';
import ServerManager from './_serverManager';
import ToolManager from './_toolManager';
import UserManager from './_userManager';


class Provider {

    constructor() {
        this._toolManager = new ToolManager(this);
        this._userManager = new UserManager(this);
        this._serverManager = new ServerManager(this);
    }

    get serverManager() {
        return this._serverManager;
    }

    get toolManager() {
        return this._toolManager;
    }

    get userManager() {
        return this._userManager;
    }
}

export const ServiceProviderContext = React.createContext(null);

export function ServiceProvider({ children }) {
    return (
        <ServiceProviderContext.Provider value={ new Provider() }>
            { children }
        </ServiceProviderContext.Provider>
    );
}

ServiceProvider.propTypes = {
    children: PropTypes.element,
}
