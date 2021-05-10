import "./App.css";
import "./Todo.css"
import ToDo from "./ToDo";
import Group19 from "./Group19"
import Group15 from "./Group15";
import Group23 from "./Group23";
import Group20 from "./Group20";
import Group22 from "./Group22";
import Group21 from "./Group21";
import {BrowserRouter as Router,Route,Switch,Link} from "react-router-dom";
import Header from "./Components/Header"

function App() {
  return (
    <Router>
<Header/>
    <div className="app-div">

   
      <Switch>
        <Route path="/todolist" component={ToDo} />
        <Route path="/group19" component={Group19} />
        <Route path="/group15" component={Group15} />
        <Route path="/group23" component={Group23} />
        <Route path="/group20" component={Group20} />
        <Route path="/group22" component={Group22} />
        <Route path="/group21" component={Group21} />
      </Switch>
    </div>
  </Router>
   
  );
}

export default App;
