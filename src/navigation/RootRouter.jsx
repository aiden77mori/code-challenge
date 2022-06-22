import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { HomeScreen } from "../features/home";
import { QuizScreen } from "../features/quiz";
import { ResultsScreen } from "../features/results";

const RootRouter = () => (
  <Router>
    <div>
      <Switch>
        <Route path="/quiz">
          <QuizScreen />
        </Route>
        <Route path="/results">
          <ResultsScreen />
        </Route>
        <Route path="/">
          <HomeScreen />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default RootRouter;
