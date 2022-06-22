import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
} from "@material-ui/core";
import { HelpOutline } from "@material-ui/icons";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: 20,
  },
  icon: {
    color: theme.palette.primary.main,
    width: 55,
    height: 55,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 0,
  },
  text: {
    marginBottom: 60,
    maxWidth: 700,
  },
  category: {
    marginBottom: 30,
    maxWidth: 700,
  },
  button: {
    marginLeft: -17,
  },
}));

const Quiz = ({ category, number, total, question, onAnswer }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <HelpOutline className={classes.icon} />
      <CardContent className={classes.content}>
        <Typography className={classes.text} variant="h3">
          {`Question ${number} of ${total}`}
        </Typography>
        <Typography className={classes.category} variant="h5">
          {category}
        </Typography>
        <Typography
          className={classes.text}
          variant="h6"
          dangerouslySetInnerHTML={{ __html: question }}
        />
        <CardActions>
          <Button
            className={classes.button}
            size="large"
            color="primary"
            onClick={() => onAnswer("True")}
          >
            True
          </Button>
          <Button
            className={classes.button}
            size="large"
            color="primary"
            onClick={() => onAnswer("False")}
          >
            False
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

Quiz.propTypes = {
  category: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default Quiz;
