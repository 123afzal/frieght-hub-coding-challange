/* Bootstrap */
import 'bootstrap/dist/css/bootstrap.css';

/* Global Style */
import './styles/main.css';

/* Font Awesome */
import 'font-awesome/css/font-awesome.min.css'

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes'

ReactDOM.render(<Routes />, document.getElementById('root'));