import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { AboutPage } from "./tabs/about";
import { HomePage } from "./tabs/home";
import { ProjectsAndExperiencePage } from "./tabs/projectsAndExperience";

function App() {
  return (
    <div className="main">
    <Router>
      <div className="tabs">
      <div>
        <NavLink
          className="home-button"
          activeStyle={{ color : "black", backgroundColor : "white", padding: 10, borderRadius : 20 }}
          style={{ textDecoration: "none", color : "white", padding: 10 }}
          exact to="/">
          Home
        </NavLink>
      </div>
      <div>
        <NavLink 
          activeStyle={{ color : "black", backgroundColor : "white", padding: 10, borderRadius : 20 }}
          style={{ textDecoration: "none", color : "white", padding: 10}}
          exact to="/about">
          About
        </NavLink>
      </div>
      <div>
        <NavLink 
          activeStyle={{ color : "black", background : "white", padding: 10, borderRadius: 20
          }}
          style={{ textDecoration: "none", color : "white", padding : 10}}
          exact to="/projects&experience">
          Projects and Professional Experience
          </NavLink>
      </div>
      </div>
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/projects&experience">
          <ProjectsAndExperiencePage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>  
    </Router>
    </div>
  );
}


export default App;
