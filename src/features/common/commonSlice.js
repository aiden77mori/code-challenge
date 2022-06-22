import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_ENDPOINT } from "../../constants";
import DOMPurify from "dompurify";

export const commonSlice = createSlice({
  name: "common",
  initialState: {
    questions: [],
    answers: [],
    error: undefined,
  },
  reducers: {
    setQuestions: (state, action) => {
      state.questions = action.payload.map((element) => {
        element.question = DOMPurify.sanitize(element.question);
        return element;
      });
      state.error = undefined;
    },
    setAnswer: (state, action) => {
      state.answers.push(action.payload);
    },
    error: (state, action) => {
      state.error = action.payload;
    },
    reset: (state) => {
      state.questions = [];
      state.answers = [];
      state.error = undefined;
    },
  },
});

export const { setQuestions, setAnswer, error, reset } = commonSlice.actions;

export const fetchQuestions = () => (dispatch) => {
  axios
    .get(API_ENDPOINT, { headers: { Accept: "application/json" } })
    .then((response) => {
      const { data } = response;
      const { results } = data;
      dispatch(setQuestions(results));
    })
    .catch((e) => {
      console.error(e);
      dispatch(error(e.message));
    });
};

export const selectQuestion = (state) => {
  const { common } = state;
  const { error, questions, answers } = common;

  if (error) {
    return { error };
  }

  if (questions.length > 0) {
    const currentQuestion = questions[answers.length];
    return {
      ...currentQuestion,
      number: answers.length + 1,
      total: questions.length,
    };
  }

  return {};
};

export const selectResults = (state) => {
  const { common } = state;
  const { questions, answers } = common;

  return questions.map((question, index) => ({
    question: question.question,
    rightAnswer: answers[index] === question.correct_answer,
  }));
};

export default commonSlice.reducer;
