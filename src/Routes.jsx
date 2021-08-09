import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminPanel from './components/AdminPanel/AdminPanel';
import AdminContextProvider from './contexts/AdminContext';
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import Navbar from './components/Header/Navbar'
import Home from './components/Home/Home'
import AuthContextProvider from './contexts/AuthContext';


const Routes = () => {
    return (
        <AuthContextProvider>
        <BrowserRouter>
            <Navbar/>
            <AdminContextProvider>
                <Switch>
                    <Route exact path='/' component={Home} />
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                    <Route exact path="/admin" component={AdminPanel} />
                </Switch>
            </AdminContextProvider>
        </BrowserRouter>
        </AuthContextProvider>
    );
};

export default Routes;