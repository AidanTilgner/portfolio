//components
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Components from "./pages/Components/Components";
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
          <Route
            exact
            path="/"
            render={() => <Home />}
            // component={Home}
          />
          <Route
            exact
            path="/components"
            render={() => <Components />}
            // component={Components}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
