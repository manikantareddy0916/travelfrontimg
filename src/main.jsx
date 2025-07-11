import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'; //its for bootstrap styles
import { BrowserRouter as Router } from 'react-router-dom';

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router >
            <App />
    </Router>
)
