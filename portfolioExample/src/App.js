import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer'
import Hello from './Hello'
import About from './About'
import Projects from './Projects'
import { Switch, Route} from 'react-router-dom'


import './css/tailwind.css'

class App extends Component {
  render() {
    return (
      <div className="page-wrapper">
          <div className="page-content">
              <Header />
              <div className="content-wrapper">
                  <Switch>
                      <Route exact path ='/' component={Hello} ></Route>
                      <Route exact path ='/about' component={About}></Route>
                      <Route exact path ='/projects' component={Projects}></Route>
                  </Switch>
              </div>
              <Footer/>
          </div>
      </div>
    );
  }
}

export default App;
