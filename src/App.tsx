import React from 'react';
import './App.scss';
import { Layout } from 'antd';
import UserTableInfo from '../src/Pages/UserTableInfo/UserTableInfo'
import { AppState } from "./Store";
import { connect } from "react-redux";
import { actions } from "./Store/actions/actionCreators";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Index from '../src/Pages/Index/Index';
import MenuBar from './Components/MenuBar/MenuBar'
const { Header, Content, Footer } = Layout;

const App: React.FC<ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps> = (
  isLogin
) => {

  const generator
   = ()=>{
    if (isLogin){
      return (
          <div>
     
                  <Switch>
                      <Redirect path="/"
                          exact
                          to={{ pathname: "/index" }}
                      />
                      <Route path="/index" component={Index} />
                      <Route path="/member" component={UserTableInfo}/>
                      {/* <Route path="/" component={} />
                      <Route path="/" component={} /> */}
                  </Switch>
      
          </div >
      )
    }
  }
  
  return(
  <div>
      <Router>
       <Layout style={{ minHeight: '100vh' }}>
       <MenuBar/>
       <Layout className="site-layout">
       <Header className="site-layout-background"/>
       <Content className="layout-contnet">
    
              {generator()}
    
          </Content>
        <Footer style={{ textAlign: 'center' }}>STZB CMS ©2020</Footer>
    </Layout>
    </Layout>
    </Router>
  </div>
  )
}
const mapStateToProps = (state: AppState) => ({
    isLogin: state.user.isLogin
});
const mapDispatchToProps = {
    changeToLogin: actions.changeToLogin,
    changeToNotLogin: actions.changeToNotLogin
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

