import React, { useContext } from 'react';
import { Route, Switch, __RouterContext } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';
import BlogPost from './components/BlogPost/BlogPost';
import NotFound from './components/NotFound/NotFound';


const App = () => {

  const { location, history, match } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translate(-80%, 0)'},
    enter: { opacity: 1, transform: 'translate(0%, 0)'},
    leave: { opacity: 0, transform: 'translate(120%, 0)'},
    config: {
      duration: 400
    }
  });
  return (
    <>
      <NavBar 
        pages={['About Us', 'Our Work', 'Contact', 'Blog']}
      />
      {transitions.map(({ item, props, key }) => (
        <animated.div key={key} style={props}>
          <Switch location={item}>
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

        </animated.div>
      ))}
    </>
  )

}

export default App;