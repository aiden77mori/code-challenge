import React from "react";
import Results from "./Results";
import { useSelector } from "react-redux";
import { selectResults } from "../common";
import { useHistory } from "react-router-dom";

const ResultsScreen = () => {
  const history = useHistory();
  const results = useSelector(selectResults);
  const onPlayAgain = () => {
    const { location } = history;
    const { state } = location || {};
    const { from } = state || {};
    if (from) {
      history.goBack();
    } else {
      history.replace("/");
    }
  };
  return <Results results={results} onPlayAgain={onPlayAgain} />;
};

export default ResultsScreen;
