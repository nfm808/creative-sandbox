import React, { useContext } from 'react';
import { Route, Switch, __RouterContext } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import useWindowSize from './hooks/useWindowSize';
import SizeContext from './SizeContext';
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
  const size = useWindowSize()
  const { location } = useContext(__RouterContext);
  const transitions = useTransition(location, location => location.pathname, {
    from: {  transform: 'translate(-50%, 0) '},
    enter: {  transform: 'translate(0%, 0) '},
    leave: {  transform: 'translate(120%, 0) '},
    config: {
      duration: 300,
    }
  });
  return (
    <>
    <SizeContext.Provider value={size}>
      <NavBar 
        size={size}
        pages={['About Us', 'Our Work', 'Learn', 'Contact' ]}
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
              path={'/learn'}
              component={Blog}
            />
            <Route 
              exact
              path={`/our-work/:id`}
              component={Work}
            />
            <Route 
              exact
              path={'/learn/:id'}
              component={BlogPost}
            />
            <Route
              component={NotFound}
            />
          </Switch>

        </animated.div>
      ))}
    </SizeContext.Provider>
    </>
  )

}

export default App;