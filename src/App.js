import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Inicio from './Inicio';
import Login from './auth/Login';
import Navbar from './/navbar/Navbar';
//import HeaderNav from "./navbar/HeaderNav";
import Banner from "./Banner";
import Dashboard from './dashboard/Dashboard';
import CreateProject from './projects/CreateProject';
import ProjectDetails from './projects/ProjectDetails';
import Footer from './footer';
import Contacto from './Contacto';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App" >
        <Navbar />
        <Banner />
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route path="/inicio" component={Inicio} />
          <Route path="/panel" component={Dashboard} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/project/:uid" component={ProjectDetails} />
          <Route path='/login' component={Login} />
          <Route path="/crear" component={CreateProject}/>
        </Switch>
        <Footer />
      </div>
      </BrowserRouter>
    )
  }
}

export default App;
