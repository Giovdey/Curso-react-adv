import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

import logo from '../logo.svg';

// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';
import { routes } from './routes';
import { Suspense } from 'react';

export const Navigation = () => {
  return (
    <Suspense fallback={<span>Loading</span>}>
      <Router>
      <div className="main-layout">
      <nav>
          <img src={ logo } alt="React Logo" />
        <ul>
          {/* Rutas dinámicas */}
          {
            routes.map(({path,name})=>(
              <li key={path}>
                <NavLink 
                  to={path} 
                  activeClassName="nav-active" 
                  
                >
                  {name}
                </NavLink>
              </li>
              ))
          }
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
      {
        routes.map(({path,component:Component})=>(
        <Route path={path}
          key={path}
          render={()=>{
            return <Component/>
          }}
        />
        ))
      }
      <Redirect to={routes[0].path}/>
      </Switch>
      </div>
      </Router>
    </Suspense>
  );
}