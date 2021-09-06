import React, { FC } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Login, Registration } from "./pages";

const App: FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/registration">
          <Registration />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
