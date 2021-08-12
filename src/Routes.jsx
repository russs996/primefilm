import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AdminPanel from './components/AdminPanel/AdminPanel';
import AdminContextProvider from './contexts/AdminContext';
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import Navbar from './components/Header/Navbar'
import AuthContextProvider from './contexts/AuthContext';
import Footer from './components/Footer/Footer'
import HomeProvider from './components/Home/Home';
import Home from './components/Home/Home';
import ClientContextProvider from './contexts/ClientContext';
import ProdDetail from './components/ProdDetail/ProdDetail';

console.log('asdasd')
const Routes = () => {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <ClientContextProvider>
                    <Navbar />
                    <AdminContextProvider>
                        <Switch>
                            <Route exact path='/' component={Home} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/admin" component={AdminPanel} />
                            <Route exact path="/product-detail/:id" component={ProdDetail} />
                        </Switch>
                    </AdminContextProvider>
                </ClientContextProvider>
                <Footer />
            </BrowserRouter>
        </AuthContextProvider>
    );
};

export default Routes;