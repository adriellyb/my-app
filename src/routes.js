import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/** imports routes */
import Home from './pages/Home'

//<Route exact path="/" component={Home} />

export default function Routes() {

    return(
        <BrowserRouter>
            <Route exact path="/" component={Home} />
        </BrowserRouter>
    );
}