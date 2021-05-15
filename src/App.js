import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Simple from "./components/Simple";
import Hex from "./components/Hex";
import "./styles.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Simple} />
          <Route path="/hex" component={Hex} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
