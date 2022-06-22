import React, { useEffect } from "react";
import Quiz from "./Quiz";
import { useSelector, useDispatch } from "react-redux";
import { selectQuestion, fetchQuestions, setAnswer } from "../common";
import { CircularProgress } from "@material-ui/core";
import { Error } from "../error";
import { useHistory, Prompt } from "react-router-dom";

const QuizScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const result = useSelector(selectQuestion);

  useEffect(() => {
    dispatch(fetchQuestions());
  }, [dispatch]);

  if (result.error) {
    return <Error />;
  }

  const onAnswer = (answer) => {
    dispatch(setAnswer(answer));
    if (result.number === result.total) {
      history.replace("/results", { from: history.location.state.from });
    }
  };

  if (result.question) {
    return (
      <>
        <Quiz {...result} onAnswer={onAnswer} />
        <Prompt
          when={true}
          message={(location) => {
            if (location.pathname === "/") {
              return "You cannot answer a previous question again. If you return, the game will be restarted. Are you sure you want to return?";
            }
            return true;
          }}
        />
      </>
    );
  }

  return <CircularProgress />;
};

export default QuizScreen;
