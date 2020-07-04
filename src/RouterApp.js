import React, { Component, Fragment } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Profile from './pages/Profile'
class RouterApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <nav>
            <li> <Link to='/'> Home </Link> </li>
            <li> <Link to='/about'> About </Link> </li>
            <li> <Link to='/login'> Login </Link> </li>
            <li> <Link to='/profile'> Profile </Link> </li>
          </nav>
          
          <main>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' exact component={About} />
              <Route path='/login' exact component={Login} />
              <Route path='/profile' exact component={Profile} />          
            </Switch>
          </main>
        </Fragment>
      </BrowserRouter>
    )
  }
}
export default RouterApp