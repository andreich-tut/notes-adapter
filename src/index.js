import { createBrowserHistory } from 'history';
import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import App from '@/components/core/App';
import { ServiceProvider } from '@/services/serviceProvider';


render(
    <Router history={createBrowserHistory()}>
        <ServiceProvider>
            <App/>
        </ServiceProvider>
    </Router>,
    document.getElementById('app')
);