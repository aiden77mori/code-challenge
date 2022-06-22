import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Card, CardContent } from "@material-ui/core";
import { Error as Icon } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    padding: 20,
  },
  icon: {
    color: theme.palette.primary.main,
    width: 55,
    height: 55,
    marginRight: 20,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    padding: 0,
  },
  smallText: {
    marginTop: 20,
  },
}));

const Error = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Icon className={classes.icon} />
      <CardContent className={classes.content}>
        <Typography variant="h3">Sorry, something went wrong.</Typography>
        <Typography variant="h6" className={classes.smallText}>
          See the javascript console for technical details.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Error;
