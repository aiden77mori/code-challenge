import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
import { CheckOutlined, ClearOutlined } from "@material-ui/icons";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: 20,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 0,
  },
  text: {
    marginBottom: 60,
  },
  button: {
    marginLeft: -17,
  },
  answer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
    alignSelf: "flex-start",
  },
  icon: {
    color: theme.palette.primary.main,
    width: 40,
    height: 40,
    marginRight: 20,
  },
  question: {
    maxWidth: 700,
  },
}));

const Answer = ({ question, rightAnswer }) => {
  const classes = useStyles();
  return (
    <div className={classes.answer}>
      {rightAnswer ? (
        <CheckOutlined className={classes.icon} />
      ) : (
        <ClearOutlined className={classes.icon} />
      )}
      <Typography
        variant="h6"
        className={classes.question}
        dangerouslySetInnerHTML={{ __html: question }}
      />
    </div>
  );
};

Answer.propTypes = {
  rightAnswer: PropTypes.bool.isRequired,
  question: PropTypes.string.isRequired,
};

const Results = ({ results, onPlayAgain }) => {
  const classes = useStyles();
  const rightAnswer = results.filter((result) => result.rightAnswer).length;

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography className={classes.text} variant="h3">
          {`You scored ${rightAnswer} of ${results.length}`}
        </Typography>
        {results.map((result) => (
          <Answer
            key={result.question}
            question={result.question}
            rightAnswer={result.rightAnswer}
          />
        ))}
        <CardActions>
          <Button
            className={classes.button}
            size="large"
            color="primary"
            onClick={onPlayAgain}
          >
            Play Again
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

Results.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape(Answer.propTypes)).isRequired,
  onPlayAgain: PropTypes.func.isRequired,
};

export default Results;
