import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Import Bootstrap Frontend Library
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar, Jumbotron, Button } from 'react-bootstrap';

// Global CSS
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
