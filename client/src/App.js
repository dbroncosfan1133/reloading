import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/LoginPage";
import MainPage from "./pages/MainPage";
import LoadDataPage from "./pages/LoadDataPage";
import NewLoadsPage from "./pages/NewLoadsPage";
import LoadDetails from "./pages/LoadDetails";
import Lyman from "./pages/Lyman";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={MainPage} />
          <Route exact path="/loads" component={LoadDataPage} />
          <Route exact path="/newload" component={NewLoadsPage} />
          <Route exact path="/loads/:id" component={LoadDetails} />
          <Route exact path="/data" component={Lyman} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
