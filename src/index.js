import React from 'react';
import { render } from 'react-dom';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';

// React Router Dependencies
import { BrowserRouter } from 'react-router-dom';

// Import Bootstrap Frontend Library
import './Styles/css/index.css';

render((
    <BrowserRouter>
        <App {...this.props} />
    </BrowserRouter>
), document.getElementById('root'));

// In production, register a service worker to serve assets from local cache.
registerServiceWorker();
