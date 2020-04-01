import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import LoadDataPage from "./pages/LoadDataPage";
import NewLoadsPage from "./pages/NewLoadsPage";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/loads" component={LoadDataPage} />
          <Route exact path="/newload" component={NewLoadsPage} />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
