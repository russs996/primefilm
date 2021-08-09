import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminPanel from './components/AdminPanel/AdminPanel';
import AdminContextProvider from './contexts/AdminContext';

const Routes = () => {
    return (
        <BrowserRouter>
            <AdminContextProvider>
                <Switch>
                    <Route exact path="/admin" component={AdminPanel} />
                </Switch>
            </AdminContextProvider>
        </BrowserRouter>
    );
};

export default Routes;