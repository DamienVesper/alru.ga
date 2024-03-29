import React from 'react';
import ReactDOM from 'react-dom';

import App from './routes/App';
import Servers from './routes/Servers';
import Staff from './routes/Staff';

import Header from './components/Header';
import Page404 from './routes/errors/404';

import reportWebVitals from './reportWebVitals';
import './assets/css/index.css';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <div>
                <Header />

                <Switch>
                    <Route exact path="/">
                        <App />
                    </Route>

                    <Route exact path="/servers">
                        <Servers />
                    </Route>

                    <Route exact path="/staff">
                        <Staff />
                    </Route>

                    {/* Redirects */}
                    <Route exact path="/discord">

                    </Route>

                    {/* Error Pages */}
                    <Route path="/">
                        <Page404 />
                    </Route>
                </Switch>
            </div>
        </Router>
    </React.StrictMode>,
    document.querySelector(`#root`)
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
