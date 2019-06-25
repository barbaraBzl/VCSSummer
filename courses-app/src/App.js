import React from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Courses from "./Courses";
import Home from "./Home";
import CourseCards from "./Models/CourseCard";
import InfoAboutCourse from "./InfoAboutCourse";

const App = () => (
    <BrowserRouter>
        <div>
            <div className="NavContainer">
                <button className="NavButton">
                    <NavLink to="/home">Home</NavLink>
                </button>

                <button className="NavButton">
                    <NavLink to={{ pathname: "/courses" }}>Link to courses</NavLink>
                </button>

                <button className="NavButton">
                    <NavLink to={{ pathname: "/courseCards" }}>Link to courses</NavLink>
                </button>

                <button className="NavButton">
                    <NavLink to={{ pathname: "/infoAboutCourse" }}>Info about course</NavLink>
                </button>

            </div>
            <Switch>
                <Route exact path="/courses" component={Courses} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/courseCards" component={CourseCards.CourseCards} />
                <Route exact path="/infoAboutCourse" component={InfoAboutCourse} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;
//search+jumbotron
const Search=()=>{
    return(<div>
        <div>
        <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1"/>
        </div>

        <div class="example">
  <input type="text" placeholder="Search.." name="search"/>
  <button type="submit">Search</button>
        </div>

    </div>);
}