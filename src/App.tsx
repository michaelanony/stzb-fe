import React from 'react';
import './App.css';
import { AppState } from "./Store";
import { connect } from "react-redux";
import { actions } from "./Store/actions/actionCreators";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Index from '../src/Pages/Index/Index';
import Header from '../src/Components/Header/Header';

const App: React.FC<ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps> = () => {

    return (
        <div>
            <Router>
                <Switch>
                    <Redirect path="/"
                        exact
                        to={{ pathname: "/index" }}
                    />
                    <Route path="/index" component={Index} />
                    
                    {/* <Route path="/" component={} />
                    <Route path="/" component={} /> */}
                </Switch>


            </Router>
        </div >
    );

}
const mapStateToProps = (state: AppState) => ({
    isLogin: state.user.isLogin
});
const mapDispatchToProps = {
    changeToLogin: actions.changeToLogin,
    changeToNotLogin: actions.changeToNotLogin
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

