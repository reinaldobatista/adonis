import React from 'react';
import {BrowserRouter, Switch,Route} from 'react-router-dom';

import indexRequisition from './pages/requisition/index';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path= "/requisition" component={indexRequisition} />
        </Switch>
    </BrowserRouter>
)

export default Routes;