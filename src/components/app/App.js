import Navbar from "../navbar/navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import Home from "../pages/home";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path = "/" exact component = {Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
