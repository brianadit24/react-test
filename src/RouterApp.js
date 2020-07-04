import React, { Component, Fragment } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
class RouterApp extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <nav>
            <li> <Link to='/'> Home </Link> </li>
            <li> <Link to='/about'> About </Link> </li>
          </nav>
          
          <main>
            <Switch>
              <Route path='/' exact component={Home} />
              <Route path='/about' exact component={About} />          
            </Switch>
          </main>
        </Fragment>
      </BrowserRouter>
    )
  }
}
export default RouterApp