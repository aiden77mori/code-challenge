import React, { useEffect } from "react";
import Home from "./Home";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { reset } from "../common";

const HomeScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return <Home onBegin={() => history.push("/quiz", { from: "/" })} />;
};

export default HomeScreen;
