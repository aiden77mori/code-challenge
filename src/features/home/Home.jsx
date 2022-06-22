import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
import { ChangeHistoryTwoTone } from "@material-ui/icons";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: 20,
  },
  pyramids: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 30,
  },
  leftPyramid: {
    color: theme.palette.primary.main,
    width: 170,
    height: 170,
  },
  rightPyramid: {
    color: theme.palette.primary.main,
    width: 200,
    height: 200,
    marginLeft: -100,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 0,
  },
  text: {
    marginBottom: 60,
    textAlign: "center",
  },
}));

const Home = ({ onBegin }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <div className={classes.pyramids}>
          <ChangeHistoryTwoTone className={classes.leftPyramid} />
          <ChangeHistoryTwoTone className={classes.rightPyramid} />
        </div>
        <Typography className={classes.text} variant="h3">
          Welcome to the Trivia Challenge!
        </Typography>
        <Typography className={classes.text} variant="h6">
          You will be presented with 10 True or False questions.
        </Typography>
        <Typography className={classes.text} variant="h6">
          Can you score 100%?
        </Typography>
        <CardActions>
          <Button size="large" color="primary" onClick={onBegin}>
            Begin
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

Home.propTypes = {
  onBegin: PropTypes.func.isRequired,
};

export default Home;
