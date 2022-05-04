//components
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Components from "./pages/Components/Components";
import Docs from "./pages/Docs/Docs";
// add react router
import { HashRouter as Router, Switch, Route } from "react-router-dom";

//files
import "./styles/App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/components" render={() => <Components />} />
          <Route path="/docs" render={() => <Docs />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
