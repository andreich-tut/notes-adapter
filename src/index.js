import React from 'react';
import { render } from 'react-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { ServiceProvider } from '@/services/serviceProvider';
import App from '@/components/core/App';


render(
    <Router history={ createBrowserHistory() }>
        <ServiceProvider>
            <App/>
        </ServiceProvider>
    </Router>,
    document.getElementById('app')
);