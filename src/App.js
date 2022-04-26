import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./components/home/Home";
import Players from "./components/players/Players";
import ViewPlayer from "./components/viewPlayer/ViewPlayer";
import CreatePlayer from "./components/createPlayer.js/CreatePlayer";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/player" component={Players} />
          <Route exact path="/player/:id" component={ViewPlayer} />
          <Route exact path="/player/createplayer" component={CreatePlayer} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
