import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import CopyPage from "../pages/CopyPage";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import SitePage from "../pages/SitePage";
import SocialPage from "../pages/SocialPage";

function RouterPages () {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <HomePage />
                </Route>

                <Route exact path='/sobre'>
                    <AboutPage />
                </Route>

                <Route exact path='/contato'>
                    <ContactPage/>
                </Route>

                <Route exact path='/copywriting'>
                    <CopyPage/>
                </Route>

                <Route exact path='/sites'>
                    <SitePage/>
                </Route>

                <Route exact path='/redes_sociais'>
                    <SocialPage/>
                </Route>

                <Route path='*'>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default RouterPages