import './App.css';
import {
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import { AboutPage } from "./tabs/about";
import { HomePage } from "./tabs/home";
import { ProjectsPage } from "./tabs/projectsAndExperience";

function App() {
  return (
    <div>
      <div className="tabs">
        <div>
          <NavLink
            className="tab-button"
            activeStyle={{ color : "black", backgroundColor : "white", padding: 10, borderRadius : 20 }}
            style={{ textDecoration: "none", color : "white", padding: 10 }}
            exact to="/">
            Home
          </NavLink>
        </div>
        <div>
          <NavLink 
            className="tab-button"
            activeStyle={{ color : "black", backgroundColor : "white", padding: 10, borderRadius : 20 }}
            style={{ textDecoration: "none", color : "white", padding: 10}}
            exact to="/about">
            About
          </NavLink>
        </div>
        <div>
          <NavLink 
            className="tab-button"
            activeStyle={{ color : "black", background : "white", padding: 10, borderRadius: 20}}
            style={{ textDecoration: "none", color : "white", padding : 10}}
            exact to="/projects">
            Projects
          </NavLink>
        </div>
      </div>
      <Switch>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/projects">
          <ProjectsPage />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>  
    </div>
  );
}


export default App;
