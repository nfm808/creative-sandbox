import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { Transition, animated } from 'react-spring/renderprops.cjs'
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import BlogPost from './components/BlogPost/BlogPost';
import NotFound from './components/NotFound/NotFound';





class App extends React.Component {

  renderRoutes() { 
    return (
      <Switch>
        <Route 
          exact
          path={'/'}
          component={Home}
        />
        <Route 
          exact
          path={'/about-us'}
          component={About}
        />
        <Route 
          exact
          path={'/our-work'}
          component={Work}
        />
        <Route 
          exact
          path={'/contact'}
          component={Contact}
        />
        <Route 
          exact
          path={'/blog'}
          component={Blog}
        />
        <Route 
          exact
          path={`/work/:id`}
          component={Work}
        />
        <Route 
          exact
          path={'/blog/:id'}
          component={BlogPost}
        />
        <Route
          component={NotFound}
        />
    </Switch>
  )}
  render() {
  return (
    <div className="App">
      <NavBar 
        pages={['About Us', 'Our Work', 'Contact', 'Blog']}
      />
      {this.renderRoutes()}
    </div>
  );
  }
}

export default App;
